# Specify base image
FROM node:alpine

# Set the working directory to '/app' in the container
# All following commands will be issued relative to this dir
WORKDIR /app

# Copy over only the package.json file
COPY package.json ./

# Install all dependencies
RUN npm install

# Copy over all of the remaining source code
# node_modules folder is ignored
COPY ./ ./

# Set the command to run when the container starts up
CMD ["npm", "start"]