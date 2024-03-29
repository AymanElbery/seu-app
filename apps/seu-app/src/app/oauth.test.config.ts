import { AuthConfig } from 'angular-oauth2-oidc';

export const oAuthDevelopmentConfig = {
    issuer: "https://iam.seu.edu.sa:443/oauth2",
    clientId: "SSClient",
    dummyClientSecret: "r25WLbwerqAzpgDZ2aaWelcome1",
    redirectUri: "https://stage-eservice.seu.edu.sa/home",
    postLogoutRedirectUri: "https://stage-eservice.seu.edu.sa/home",
    scope: 'StudentServiceResourceServer.openid StudentServiceResourceServer.Email StudentServiceResourceServer.Offline_access StudentServiceResourceServer.profile openid profile phone address email',
    oidc: false,
    requireHttps: false,
    useHttpBasicAuth: true,
    responseType: "code", 
    showDebugInformation: true,
    timeoutFactor: 0.90,
    sessionChecksEnabled: false,
    sessionCheckIntervall: 5 * 1000,
    silentRefreshRedirectUri: "https://stage-eservice.seu.edu.sa/silent-refresh.html",
    silentRefreshTimeout: 5 * 1000,
    customQueryParams: { domain: 'StudentServicesDomain', requiresConsent: false },
    identityDomainName: 'StudentServicesDomain',
    config_openid: "https://iam.seu.edu.sa/.well-known/openid-configuration"
}
