# Use an official Node.js runtime as a base image
FROM node:latest

# Set the working directory in the container
WORKDIR /singh_sajanpreet_final_site

# Copy the package.json file and package-lock.json file
COPY package*.json ./

# Set up npm authentication (replace <your_token> with your actual token)
RUN echo "//npm.pkg.github.com/:_authToken=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" > ~/.npmrc

# Install dependencies
RUN npm install

# Copy the rest of app's source code from  host to image filesystem.
COPY . .

# Build the app
RUN npm run build

# Install http-server to serve the build folder
RUN npm install -g http-server

# Expose the port the app runs on
EXPOSE 5575

# Serve the app using http-server
CMD ["http-server", "build", "-p", "5575"]