// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  cmslink: 'https://seu.edu.sa/umbraco/Surface/',
  baselink: 'https://seuapps.seu.edu.sa/newservices/', // newservices/
  ssolink: 'https://seuapps.seu.edu.sa/newservices/sso', // newservices/
  wafi_apilink: 'https://sso.seu.edu.sa/CPTIT_SEU_WS_TEST/jersey/', // wafi 
  servicesprefix: 'api-test', // api-test
  appsprefix: 'apps-test', // api-test
  loginpage: 'login-testl.php',
  notesAuth: 'nots:N0t!fic@ti0n$',
  ssoAuth: 'sso:s$0$3u2030',
  allowWafi:true
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
