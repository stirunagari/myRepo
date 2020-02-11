import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GuiHomeComponent } from './components/gui/gui-home/gui-home.component';
import { UserComponent } from './components/gui/user/user.component';
import { GuiCitiesComponent } from './components/gui/gui-cities/gui-cities.component'

import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path: '', pathMatch:'full', redirectTo:'home'},
  { path: 'gui', component: GuiHomeComponent},
  { path: 'gui/users', component: UserComponent},
  { path: 'gui/cities', component: GuiCitiesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
