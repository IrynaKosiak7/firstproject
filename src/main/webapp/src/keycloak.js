import Keycloak from "keycloak-js";

const keycloak = new Keyclok ({
  url: 'http://localhost:8080/reaalms/quarkus',
  realm: 'quarkus',
  clientId: 'quarkus-react-rest-api',
});

export default keycloak;