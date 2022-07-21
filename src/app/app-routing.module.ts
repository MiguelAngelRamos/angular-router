import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContainerPhotoComponent } from './pages/container-photo/container-photo.component';
import { Error404Component } from './pages/error404/error404.component';
import { HomeComponent } from './pages/home/home.component';
import { PhotoIdComponent } from './pages/photo-id/photo-id.component';
import { UserComponent } from './pages/user/user.component';
import { UsersComponent } from './pages/users/users.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'user/:id', component: UserComponent},
  { path: 'users', component: UsersComponent},
  { path: 'photo', component: ContainerPhotoComponent},
  { path: 'photo/:id', component: PhotoIdComponent},
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: '**', component: Error404Component},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
