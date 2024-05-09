import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: 'users', loadComponent: () => import('./pages/users/users.component').then(m => m.UsersComponent), title: 'Usuarios - Clase4-17' },
  { path: 'posts', loadComponent: () => import('./pages/posts/posts.component').then(m => m.PostsComponent), title: 'Publicaciones - Clase4-17' },
  { path: '', redirectTo: 'users', pathMatch: 'full' }
];
