package de.simplylt;

import io.quarkus.security.Authenticated;
import io.quarkus.security.identity.SecurityIdentity;
import jakarta.annotation.security.RolesAllowed;
import jakarta.inject.Inject;
import jakarta.ws.rs.GET;
import jakarta.ws.rs.Path;
import jakarta.ws.rs.Produces;
import jakarta.ws.rs.core.MediaType;

@Path("/api")
@Authenticated
public class GreetingResource {
    @Inject
    SecurityIdentity identity;

    @GET
    @Produces(MediaType.APPLICATION_JSON)
    @Path("/hello")
    public Greeting hello() {
        return new Greeting("Hello "+ identity.getPrincipal().getName() +" from Quarkus REST");
    }

    @GET
    @Produces(MediaType.APPLICATION_JSON)
    @Path("/edit/help")
    @RolesAllowed("edit")
    public Greeting howCanIHelpYou() {
        return new Greeting("How can I help you?");
    }

    @GET
    @Produces(MediaType.APPLICATION_JSON)
    @Path("/user/bye")
    @RolesAllowed("user")
    public Greeting bye() {
        return new Greeting("Bye-bye");
    }
}
