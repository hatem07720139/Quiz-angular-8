import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FormulairComponent} from './formulair/formulair.component'
import { QcmquizComponent } from './qcmquiz/qcmquiz.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  {path:'subscribe',component:FormulairComponent},
  {path:'quizQcm',component:QcmquizComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
