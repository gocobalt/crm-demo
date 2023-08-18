# crm-demo-server

This repository contains the server code for the demo CRM.

## Prerequisites

Before you begin, ensure you have the following installed on your system:

- [Node.js](https://nodejs.org/) (v18 or higher)
- [Redis](https://redis.io/) (v7 or higher)
- [npm](https://www.npmjs.com/) (v8 or higher)

## Installation

1. Clone this repository to your local machine:

   ```bash
   git clone https://github.com/gocobalt/crm-demo
   cd crm-demo
   ```

2. Start the Redis server:

   ```bash
    sudo service redis-server start
    ```

3. Install the project dependencies:

    ```bash
    npm install
    ```

4. Start the development server:

    ```bash
    npm run dev
    ```

    The development server is now running on http://localhost:4000