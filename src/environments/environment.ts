// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
import { initializeApp } from "firebase/app";
export const environment = {
  production: false,
  firebaseConfig : {
    apiKey: "AIzaSyAxtRS_SVAht0Lq47d32FogzTKvJJFw_tA",
    authDomain: "simulacroparcial-ff130.firebaseapp.com",
    projectId: "simulacroparcial-ff130",
    storageBucket: "simulacroparcial-ff130.appspot.com",
    messagingSenderId: "23894037329",
    appId: "1:23894037329:web:baf316af30d2feb0a13970"
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
