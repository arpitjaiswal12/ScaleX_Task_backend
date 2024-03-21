# ScaleX Backend Task: Pair Price and Volume API

## Description 

The Pair Price and Volume API offers a RESTful interface for managing price and volume data for trading pairs. Built using MongoDB Atlas and Node.js with Express.js, it provides CRUD operations with validation and error handling for efficient data interaction. Ideal for developers, traders, and analysts needing seamless access to pair data.

## Features

- CRUD operations for pairs
- MongoDB Atlas integration
- Error and response handling and validation

## Technologies Used

- MongoDB
- Node.js
- Express.js
- Mongoose

## Installation
Provide instructions on how to install and set up your project locally. Include any prerequisites and steps necessary to get the project up and running.

# Clone the repository
git clone https://github.com/your/repository.git

# Install dependencies
npm install

# start Server 
npm run dev

## API Endpoints
List and describe the available API endpoints, along with their functionality and any required parameters.

- GET /api/v1/get/pairs: Retrieve all pairs from the database.
- POST /api/v1/create/pair: Create a new pair.
- GET /api/v1/get/pair/:pairID: Retrieve a specific pair by ID.
- PUT /api/v1/upadate/:pairID: Update a specific pair.
- DELETE /api/v1/delete/:pairID: Delete a specific pair.
