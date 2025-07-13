import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';
import { AppComponent } from './app/app';
import { appConfig } from './app/app.config';

bootstrapApplication(AppComponent, appConfig).then(() => {
  providers: [provideRouter(routes)]
}).catch(err => console.error(err));