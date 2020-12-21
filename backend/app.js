//pipe, mat-spinner,upload image, cycle de vie

const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const Match = require("./models/match");
const User = require("./models/user");
const multer = require('multer');
const path = require('path');
mongoose.connect("mongodb://localhost:27017/sportDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/images", express.static(path.join("backend/images")));

const MIME_TYPE = {
  "image/png": "png",
  "image/jpeg": "jpg",
  "image/jpg": "jpg"
};

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const isValid = MIME_TYPE[file.mimetype];
    let error = new Error("Mime type is invalid");
    if (isValid) {
      error = null;
    }
    cb(null, "backend/images");
  },
  filename: (req, file, cb) => {
    const name = file.originalname.toLowerCase().split(" ").join("-");
    const extension = MIME_TYPE[file.mimetype];
    const imgName = name + "-" + Date.now() + "-crococoder-" + "." + extension;
    cb(null, imgName);
  },
});

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, Accept, Content-Type, X-Requested-with, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, DELETE, OPTIONS, PATCH, PUT"
  );
  next();
});

app.get("/api/matches", (req, res) => {
  Match.find((err, documents) => {
    if (err) {
      console.log("Error In DataBase");
    } else {
      res.status(200).json({
        message: "Here all matches: OK",
        matches: documents,
      });
    }
  });
});

app.get("/api/matches/:id", (req, res) => {
  Match.find({ _id: req.params.id }).then((findedMatch) => {
    res.status(200).json({
      match: findedMatch,
      message: "Finded Match By Id Successfully",
    });
  });
});

app.delete("/api/matches/:id", (req, res) => {
  Match.deleteOne({ _id: req.params.id }).then((result) => {
    console.log("Result", result);
  });
  res.status(200).json({
    message: "Match deleted Successfully",
  });
});

app.post("/api/matches", multer({storage: storage}).single('img'), (req, res) => {

    console.log('This is my request', req.file);
    url = req.protocol + '://' + req.get('host');
    console.log('URL', url);
    const match = new Match({
      teamOne: req.body.teamOne,
      teamTwo: req.body.teamTwo,
      scoreOne: req.body.scoreOne,
      scoreTwo: req.body.scoreTwo,
      img: url + '/images/' + req.file.filename
    });
    
    match.save().then(console.log("Match1 added successfully"));
    res.status(201).json({
      message: "Added successfully",
    });
  }
);

app.put("/api/matches/:id", (req, res) => {
  const updatedMatch = new Match({
    _id: req.body._id,
    teamOne: req.body.teamOne,
    teamTwo: req.body.teamTwo,
    scoreOne: req.body.scoreOne,
    scoreTwo: req.body.scoreTwo,
  });

  Match.updateOne({ _id: req.body._id }, updatedMatch).then((result) => {
    console.log("Result", result);
    if (result) {
      res.status(200).json({
        updatedMatch: updatedMatch,
      });
    } else {
      console.log("Error in update");
    }
  });
});

app.post("/api/signup", (req, res) => {
  console.log("Received User", req.body);
  bcrypt.hash(req.body.pwd, 10).then((cryptedPwd) => {
    console.log("crypted PWD, ", cryptedPwd);
    const user = new User({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      phone: req.body.phone,
      email: req.body.email,
      pwd: cryptedPwd,
      confirmPwd: cryptedPwd,
    });

    user.save().then(console.log("User added successfully"));
  });
});

app.post("/api/login", (req, res) => {
  User.findOne({ email: req.body.email })
    .then((data) => {
      console.log("data", data);
      if (!data) {
        res.status(401).json({
          message: "Authentification Problem",
        });
      }
      return bcrypt.compare(req.body.pwd, data.pwd);
    })
    .then((result) => {
      if (!result) {
        res.status(401).json({
          message: "Authentification Problem",
        });
      }
      res.status(200).json({
        message: "Welcome",
      });
    });
});

module.exports = app;
