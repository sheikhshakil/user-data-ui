import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SaveUserComponent } from './save-user/save-user.component';
import { ShowUserComponent } from './show-user/show-user.component';

const routes: Routes = [
  {path : 'show-user', component : ShowUserComponent, pathMatch: "full"},
  {path : '', component: SaveUserComponent, pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
