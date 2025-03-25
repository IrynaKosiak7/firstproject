FROM ubuntu:latest
LABEL authors="iryna-kosiakovska"
WORKDIR . /usr/home/quarkus

CMD ["docker", "GreetingResource"]

#ENTRYPOINT ["top", "-b"]