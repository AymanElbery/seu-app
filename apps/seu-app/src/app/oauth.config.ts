import { AuthConfig } from 'angular-oauth2-oidc';

export const oAuthDevelopmentConfig = {
    issuer: "https://iamtest.seu.edu.sa:443/oauth2",
    clientId: "TestClient",
    dummyClientSecret: "welcome1",

    //redirectUri: "https://test-eservice.seu.edu.sa/home",
    // postLogoutRedirectUri: "https://test-eservice.seu.edu.sa/home",
    redirectUri: "http://localhost:4200/home",
    postLogoutRedirectUri: "http://localhost:4200/home",
    scope: "", //openid offline_access profile email groups resource
    oidc: true,
    requireHttps: false,
    useHttpBasicAuth: true,
    responseType: "code", //openid profile email offline_access api
    showDebugInformation: true,
    timeoutFactor: 0.90,
    sessionChecksEnabled: false,
    sessionCheckIntervall: 5 * 1000,
    //silentRefreshRedirectUri: "https://test-eservice.seu.edu.sa/silent-refresh.html",
    silentRefreshRedirectUri: "http://localhost:4200/silent-refresh.html",
    silentRefreshTimeout: 5 * 1000,
    //    nonceStateSeparator:'-',
    customQueryParams: { domain: 'StudentServicesDomain', requiresConsent: false },
    identityDomainName: 'StudentServicesDomain'
}
