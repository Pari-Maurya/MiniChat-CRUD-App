# MiniChat CRUD App

A simple Chat Application built using **Node.js**, **Express.js**, **MongoDB**, and **Mongoose** that demonstrates complete CRUD (Create, Read, Update, Delete) operations. The application allows users to create, view, edit, and delete chat messages stored in a MongoDB database.

## Features

* Create new chat messages
* View all existing chats
* Edit chat messages
* Delete chat messages
* MongoDB integration using Mongoose
* Server-side rendering with EJS
* RESTful CRUD operations

## Tech Stack

* Node.js
* Express.js
* MongoDB
* Mongoose
* EJS
* HTML/CSS

## Project Structure

```text
NODE WITH MONGODB/
│
├── models/
│   └── chat.js
│
├── node_modules/
│
├── views/
│   ├── index.ejs
│   ├── new.ejs
│   └── edit.ejs
│
├── index.js
├── init.js
├── package.json
├── package-lock.json
└── README.md
```

## Installation and Setup

1. Clone the repository:

```bash
git clone <repository-url>
```

2. Navigate to the project directory:

```bash
cd NODE-WITH-MONGODB
```

3. Install dependencies:

```bash
npm install
```

4. Make sure MongoDB is running locally.

5. Initialize sample data (optional):

```bash
node init.js
```

6. Start the server:

```bash
node index.js
```

7. Open your browser and visit:

```text
http://localhost:3000
```

## CRUD Operations

### Create

Users can create a new chat message using the form provided in the application.

### Read

All chat messages are fetched from MongoDB and displayed on the homepage.

### Update

Each chat message contains an **Edit Chat** button that allows users to modify the message content.

### Delete

Each chat message contains a **Delete Chat** button that permanently removes the message from the database.

## Application Workflow

1. Chat data is defined using a Mongoose schema in `models/chat.js`.
2. Routes and server logic are managed in `index.js`.
3. Sample chat data can be inserted using `init.js`.
4. All chats are displayed through `views/index.ejs`.
5. New chats are created using `views/new.ejs`.
6. Existing chats can be updated through `views/edit.ejs`.

## Author

Developed as a learning project to understand CRUD operations using Node.js, Express.js, MongoDB, and Mongoose.
