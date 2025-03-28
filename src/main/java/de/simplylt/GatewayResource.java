package de.simplylt;

import jakarta.ws.rs.Path;

@Path("/")
public class GatewayResource {
//    private static final String FALLBACK_RESOURCE = "/frontend/index.html";
//    private final ApiResource apiResource;
//
//    @Inject
//    public GatewayResource(ApiResource apiResource) {
//        this.apiResource = apiResource;
//    }
//
//
//    @Path("/api/v1")
//    public ApiResource getApiResource() {
//        return apiResource;
//    }
//
//
//    @GET
//
//    @Path("/")
//
//    public Response getFrontendRoot() throws IOException {
//
//        return getFrontendStaticFile("index.html");
//    }
//
//    @GET
//    @Path("/{fileName:.+}")
//    public Response getFrontendStaticFile(@PathParam("fileName") String fileName) throws IOException {
//        final InputStream requestedFileStream = GatewayResource.class.getResourceAsStream("/frontend/" + fileName);
//        final InputStream inputStream = requestedFileStream != null ?
//                requestedFileStream :
//                GatewayResource.class.getResourceAsStream(FALLBACK_RESOURCE);
//        final StreamingOutput streamingOutput = outputStream -> IOUtils.copy(inputStream, outputStream);
//        return Response
//                .ok(streamingOutput)
//                .cacheControl(CacheControl.valueOf("max-age=900"))
//                .type(URLConnection.guessContentTypeFromStream(inputStream))
//                .build();
//    }
}
