import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getFunctions, provideFunctions } from '@angular/fire/functions';
import { getStorage, provideStorage } from '@angular/fire/storage';
import { getRemoteConfig, provideRemoteConfig } from '@angular/fire/remote-config';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    provideClientHydration(withEventReplay()),
    provideFirebaseApp(() =>
      initializeApp({
        apiKey: 'AIzaSyC8mU5nq_Y5FNGpCPvwoBVw2BPpFMqAUqc',
        authDomain: 'angular-material-26c1c.firebaseapp.com',
        projectId: 'angular-material-26c1c',
        storageBucket: 'angular-material-26c1c.firebasestorage.app',
        messagingSenderId: '524248512357',
        appId: '1:524248512357:web:a4e8a12cd21154e7c5d38c',
      }),
    ),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    provideFunctions(() => getFunctions()),
    provideStorage(() => getStorage()),
    provideRemoteConfig(() => getRemoteConfig()),
  ],
};
