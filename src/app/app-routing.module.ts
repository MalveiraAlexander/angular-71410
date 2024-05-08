import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './pages/users/users.component';
import { PostsComponent } from './pages/posts/posts.component';

const routes: Routes = [
  { path: 'users', component: UsersComponent, title: 'Usuarios - Clase4' },
  { path: 'posts', component: PostsComponent, title: 'Publicaciones - Clase4' },
  { path: '', redirectTo: 'users', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
