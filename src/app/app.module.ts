import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import { MatSliderModule } from '@angular/material/slider';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { MatchesComponent } from './components/matches/matches.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { PlayersComponent } from './components/players/players.component';
import { AddMatchResultComponent } from './components/add-match-result/add-match-result.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';  
import { HttpClientModule } from '@angular/common/http';
import { MatchComponent } from './components/match/match.component';
import { TableColorDirective } from './directives/table-color.directive';
import { AdminComponent } from './components/admin/admin.component';
import { EditMatchComponent } from './components/edit-match/edit-match.component';
import { SearchComponent } from './components/search/search.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ReversePipe } from './pipes/reverse.pipe';
import { DisplayMatchComponent } from './components/display-match/display-match.component';
import { DataTablesModule } from 'angular-datatables';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    MatchesComponent,
    HeaderComponent,
    FooterComponent,
    SignInComponent,
    SignUpComponent,
    PlayersComponent,
    AddMatchResultComponent,
    MatchComponent,
    TableColorDirective,
    AdminComponent,
    EditMatchComponent,
    SearchComponent,
    NotFoundComponent,
    ReversePipe,
    DisplayMatchComponent  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    DataTablesModule,
    // MatSliderModule,
    // InMemoryWebApiModule.forRoot(DataService),
    AppRoutingModule,

    NoopAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
