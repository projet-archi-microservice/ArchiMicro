import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecomendationComponent } from './recomendation/recomendation.component';
import { Err404Component } from './err404/err404.component';

const routes: Routes = [
  {path : '', component : RecomendationComponent},
  {path : '*', component : Err404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
