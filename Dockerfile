FROM node:6.8.1

EXPOSE 3000
EXPOSE 3001
EXPOSE 4000

# install dependencies
RUN apt-get update -qq && apt-get install -y \
    git \
    build-essential \
  && apt-get clean && rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/* \

  # Add 'codemotion' user which will run the application
  && adduser codemotion --home /home/codemotion --shell /bin/bash --disabled-password --gecos ""

ADD package.json /tmp/package.json

RUN cd /tmp \
  && npm install -g \
  && rm -rf /tmp/*

# Add application source to the image and own it all by codemotion:codemotion.
RUN mkdir /home/codemotion/app && chown -R codemotion:codemotion /home/codemotion/app

WORKDIR /home/codemotion/app
USER codemotion

CMD ["npm", "start"]
