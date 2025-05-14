import Keycloak from "keycloak-js";

const keycloak = new Keycloak ({
  url: 'http://localhost:8080/realms/quarkus',
  realm: 'quarkus',
  clientId: 'quarkus-react-rest-api',
});

export default keycloak;