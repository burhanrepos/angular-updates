import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AngularSixteenUpdatesComponent } from './angular-sixteen-updates/angular-sixteen-updates.component';
import { AngularFifteenUpdatesComponent } from './angular-15-all-updates/angular-fifteen-updates/angular-fifteen-updates.component';

const routes: Routes = [
  {
    path: '',
    component: AngularFifteenUpdatesComponent,
  },{
  path: 'angular-15',
  component: AngularFifteenUpdatesComponent,
},
{
  path: 'angular-16',
  component: AngularSixteenUpdatesComponent,
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

