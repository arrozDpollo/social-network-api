# Social Network API

## Description

The **Social Network API** is a backend application that allows users to share their thoughts, react to friends’ thoughts, and create a friend list. Built with **Express.js**, **MongoDB**, and **Mongoose**, this API is designed to handle large amounts of unstructured data efficiently, making it a suitable choice for social media applications.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [API Routes](#api-routes)
- [User Stories](#user-stories)
- [Acceptance Criteria](#acceptance-criteria)
- [Walkthrough Video](#walkthrough-video)
- [License](#license)
- [Contributing](#contributing)
- [Author](#author)

## Installation

To get started with the Social Network API, follow these steps:

1. Clone the repository

2. Install the necessary dependencies:

npm install

3. Set up your MongoDB database. Make sure to update your connection string in the .env file.

4. Start the server:

npm start

## Usage
Once the server is running, you can use an API testing tool like Insomnia or Postman to test the API routes. The API is structured to handle various operations related to users and thoughts.

## API Routes
Here’s a summary of the available API routes:

### Users

GET /api/users - Get all users
GET /api/users/:userId - Get a single user by ID
POST /api/users - Create a new user
PUT /api/users/:userId - Update a user by ID
DELETE /api/users/:userId - Delete a user by ID

### Friends

POST /api/users/:userId/friends/:friendId - Add a friend
DELETE /api/users/:userId/friends/:friendId - Remove a friend

### Thoughts

GET /api/thoughts - Get all thoughts
GET /api/thoughts/:thoughtId - Get a single thought by ID
POST /api/thoughts - Create a new thought
PUT /api/thoughts/:thoughtId - Update a thought by ID
DELETE /api/thoughts/:thoughtId - Delete a thought by ID


### Reactions

POST /api/thoughts/:thoughtId/reactions - Create a new reaction
DELETE /api/thoughts/:thoughtId/reactions/:reactionId - Remove a reaction

## Walkthrough Video
[A walkthrough video demonstrating the functionality of the Social Network API can be found here.](https://github.com/arrozDpollo/social-network-api/blob/main/Module-18.mp4)
