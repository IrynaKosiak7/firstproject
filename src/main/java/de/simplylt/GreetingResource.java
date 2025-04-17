package de.simplylt;

import jakarta.ws.rs.GET;
import jakarta.ws.rs.Path;
import jakarta.ws.rs.Produces;
import jakarta.ws.rs.core.MediaType;

@Path("/api")
public class GreetingResource {

    @GET
    @Produces(MediaType.APPLICATION_JSON)
    @Path("/hello")
    public Greeting hello() {
        return new Greeting("Hello from Quarkus REST");
    }
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    @Path("/help")
    public Greeting howCanIHelpYou() {
        return new Greeting("How can I help you?");
    }
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    @Path("/bye")
    public Greeting bye() {
        return new Greeting("Bye-bye");
    }
}
