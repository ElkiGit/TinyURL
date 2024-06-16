# TinyUrl - URL Shortening Service

TinyUrl is a URL shortening service designed for business clients who publish links to landing pages and online files. This project involves a server-side application developed with Node.js.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Introduction

TinyUrl allows users to shorten URLs for more convenient and aesthetically pleasing links. It supports tracking the number of clicks and targeting different sources to evaluate the effectiveness of various promotional channels.

### Example

Original URL: `https://drive.google.com/file/d/1GpVAwrwFmu2RcbJyBTMxzzHaBtZBOky/view?usp=share_link`

TinyUrl: `https://tinyurl.co.il/14875`

## Features

- **Shortening**: Create shortened URLs for long web addresses.
- **Tracking**: Track the number of clicks on each shortened URL.
- **Targeting**: Associate different sources with the same URL to track exposure across various channels.

## Installation

### Prerequisites

- Node.js
- npm (Node package manager)
- MongoDB

### Steps

1. Clone the repository:

   ```bash
   git clone https://github.com/ElkiGit/TinyURL
   cd tinyurl
Install the dependencies:

```bash
npm install
Set up environment variables:

Create a .env file in the root directory and add your MongoDB connection string.

plaintext
```bash
MONGODB_URI=your_mongodb_connection_string
PORT=3000
Start the application:

```bash
npm start
Usage
Register a User: Create a new user to use the service.
Shorten a URL: Input a long URL to get a shortened version.
Track Clicks: Monitor the number of clicks and their sources on the shortened URLs.
API Endpoints
User Routes
GET /users: Retrieve all users.
GET /users/
: Retrieve a user by ID.
POST /users: Create a new user.
PUT /users/
: Update a user by ID.
DELETE /users/
: Delete a user by ID.
Link Routes
GET /links: Retrieve all links.
GET /links/
: Retrieve a link by ID and redirect to the original URL while recording the click.
POST /links: Create a new link.
PUT /links/
: Update a link by ID.
DELETE /links/
: Delete a link by ID.
Contributing
Contributions are welcome! Please fork the repository and create a pull request with your changes. Ensure your code adheres to the coding standards and includes appropriate tests.

