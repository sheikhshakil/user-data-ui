import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SaveUserComponent } from './save-user/save-user.component';
import { ShowUserComponent } from './show-user/show-user.component';
import { UserDeletorComponent } from './user-deletor/user-deletor.component';

@NgModule({
  declarations: [AppComponent, SaveUserComponent, ShowUserComponent, UserDeletorComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
