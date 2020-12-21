import { DisplayMatchComponent } from './components/display-match/display-match.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { EditMatchComponent } from './components/edit-match/edit-match.component';
import { AdminComponent } from './components/admin/admin.component';
import { AddMatchResultComponent } from './components/add-match-result/add-match-result.component';
import { MatchesComponent } from './components/matches/matches.component';
import { PlayersComponent } from './components/players/players.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'sign-in', component: SignInComponent},
  {path: 'sign-up', component: SignUpComponent},
  {path: 'players', component: PlayersComponent},
  {path: 'matches', component: MatchesComponent},
  {path: 'add-match-result', component: AddMatchResultComponent},
  {path: 'admin', component: AdminComponent},
  {path: 'editMatch/:id', component: EditMatchComponent},
  {path: 'displayMatch/:id', component: DisplayMatchComponent}
  // {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
