import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './pages/users/users.component';
import { PostsComponent } from './pages/posts/posts.component';
import { UserComponent } from './pages/users/user/user.component';
import { UserAddEditComponent } from './pages/users/user-add-edit/user-add-edit.component';

const routes: Routes = [
  { path: 'users', children: [
    { path: '', component: UsersComponent, title: 'Usuarios - Clase 2'},
    { path: 'add', component: UserAddEditComponent, title: 'Agregar Usuario - Clase 2' },
    { path: ':id', children: [
      { path: '', component: UserComponent, title: 'Usuario - Clase 2'},
      { path: 'edit', component: UserAddEditComponent, title: 'Editar Usuario - Clase 2' }
    ] },
  ] },
  { path: 'posts', component: PostsComponent, title: 'Publicaciones - Clase 2', data: {type: 1} },
  { path: 'publicaciones', component: PostsComponent, title: 'Publicaciones - Clase 2', data: {type: 2} },
  { path: '', redirectTo: 'users', pathMatch: 'full' },
  { path: '**', redirectTo: 'users', pathMatch: 'full' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
