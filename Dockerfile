# Use an existing node image as the base image
FROM node:14

# Set the working directory in the image
WORKDIR /app

# Copy the package.json and package-lock.json files to the image
COPY package*.json ./

# Install the dependencies
RUN npm install

# Copy the source code to the image
COPY . .

#Expose port to access the container
EXPOSE 3000

# Specify the command to run the application
CMD [ "npm", "start" ]
