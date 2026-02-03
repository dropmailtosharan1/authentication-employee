import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { importProvidersFrom } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app/app.component';
import { ROUTES } from './app/app.routes';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(ROUTES),
    importProvidersFrom(HttpClientModule, BrowserAnimationsModule),
  ],
}).catch((err) => console.error(err));
