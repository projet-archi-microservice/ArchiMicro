import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecomendationComponent } from './recomendation/recomendation.component';
import { Err404Component } from './err404/err404.component';
<<<<<<< HEAD
import { UserProfileComponent } from "./user-profile/user-profile.component";
import { GoutComponent } from './user-profile/gout/gout.component';

const routes: Routes = [
  {path : '', component : RecomendationComponent},
  {path : 'user', component : UserProfileComponent},
  {path : 'dejavu', component : GoutComponent},
=======
import { PreferencesComponent } from './preferences/preferences.component';

const routes: Routes = [
  {path : '', component : RecomendationComponent},
  {path : 'preferences', component : PreferencesComponent},
>>>>>>> main
  {path : '*', component : Err404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
