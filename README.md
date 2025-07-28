# Simple Blogging Platform

This is a simple blogging platform built with the MERN stack (MongoDB, Express, React, Node.js). It allows users to create, read, edit, and delete blog posts.

## Features

*   **Create, Read, Update, Delete (CRUD)** functionality for blog posts.
*   **Modern, clean, and minimalist UI** built with React and Tailwind CSS.
*   **Author dashboard** to manage posts.
*   **User authentication** with JWT (JSON Web Tokens).

## Technologies Used

### Frontend

*   [React](https://reactjs.org/)
*   [React Router](https://reactrouter.com/)
*   [Tailwind CSS](https://tailwindcss.com/)
*   [Vite](https://vitejs.dev/)
*   [Axios](https://axios-http.com/)

### Backend

*   [Node.js](https://nodejs.org/)
*   [Express](https://expressjs.com/)
*   [MongoDB](https://www.mongodb.com/)
*   [Mongoose](https://mongoosejs.com/)
*   [JWT](https://jwt.io/)
*   [CORS](https://www.npmjs.com/package/cors)
*   [Dotenv](https://www.npmjs.com/package/dotenv)

## Getting Started

### Prerequisites

*   [Node.js](https://nodejs.org/) (which comes with npm)
*   [MongoDB](https://www.mongodb.com/try/download/community)

### Installation

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/your-username/simple-blogging-platform.git
    cd simple-blogging-platform
    ```

2.  **Install server dependencies:**

    ```bash
    cd server
    npm install
    ```

3.  **Install client dependencies:**

    ```bash
    cd ../client
    npm install
    ```

4.  **Set up environment variables:**

    *   Create a `.env` file in the `server` directory and add the following:

        ```
        ATLAS_URI=<your_mongodb_uri>
        PORT=5000
        ```

### Running the Application

1.  **Start the server:**

    *   Navigate to the `server` directory and run:

        ```bash
        npm start
        ```

2.  **Start the client:**

    *   Navigate to the `client` directory and run:

        ```bash
        npm run dev
        ```

The application will be available at `http://localhost:3000`.