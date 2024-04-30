import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: 'users', loadComponent: () => import('./pages/users/users.component').then(c => c.UsersComponent), title: 'Users'},
  { path: 'posts', loadComponent: () => import('./pages/posts/posts.component').then(c => c.PostsComponent), title: 'Posts'},
];
