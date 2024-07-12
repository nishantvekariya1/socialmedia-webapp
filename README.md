# SocialPulse - MERN Social Media Website
This project is a social media website built using the MERN stack (MongoDB, Express.js, React.js, Node.js). It allows users to create accounts, post updates, follow other users, and interact through comments and likes.

## Table of Contents

- [Demo](#demo)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)

## Demo

![Demo Screenshot](https://github.com/nishantvekariya1/socialmedia-webapp/blob/master/Screenshots/login-page.png)
![Demo Screenshot](https://github.com/nishantvekariya1/socialmedia-webapp/blob/master/Screenshots/1-light-mode.png)
![Demo Screenshot](https://github.com/nishantvekariya1/socialmedia-webapp/blob/master/Screenshots/2-dark-mode.png)

## Features

- 🔒 User authentication (signup, login, logout)
- 💻 User profiles with customizable bios and avatars
- 📝 Post creation and interaction
- 🎨 Like and comment functionality on posts
- 🚀 Follow/unfollow other users
- 🔍 Search functionality

## Technologies Used

- **MongoDB**: NoSQL database for storing user data and posts
- **Express.js**: Web application framework for Node.js
- **React.js**: Frontend library for building user interfaces
- **Node.js**: JavaScript runtime for server-side development
- **Mongoose**: ODM for MongoDB
- **JWT**: JSON Web Tokens for authentication

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- npm
- MongoDB

### Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/nishantvekariya1/socialmedia-webapp
    ```

2. Install the dependencies for both the client and server:
    ```bash
    # In the server directory
    cd server
    npm install

    # In the client directory
    cd client
    npm install
    ```

3. Create a `.env` file in the root directory and add the following environment variables:
    ```env
     # In the server directory create .env file and put it
    MONGO_URL=your_mongodb_uri
    JWT_SECRET=your_jwt_secret
    PORT=your_port
    ```

4. Start the development servers:
    ```bash
    # In the server directory
    npm run start

    # In the client directory
    npm run start
    ```

5. Open your browser and navigate to `http://localhost:3000` to view the social media website.
