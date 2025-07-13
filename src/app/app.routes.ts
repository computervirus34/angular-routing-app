import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home';
import { AboutComponent } from './pages/about/about'; 
import { PostsComponent } from './pages/posts/posts';
import { ContactFormComponent } from './pages/contact-form/contact-form';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'about', component: AboutComponent },
  { path: 'posts', component: PostsComponent },
  { path: 'contact', component: ContactFormComponent }
];
