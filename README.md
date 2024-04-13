# Trading API Integration

This project provides integration with the Trading API to perform various actions such as user authentication, fetching user profile, placing buy and sell orders, and retrieving current holdings.

## Getting Started

To get started with this project, follow these steps:

1. Clone the repository to your local machine:

git clone https://github.com/Amar7021/Sypto_Trading_App_API

2. Install the necessary dependencies using npm:

npm install

3. Start the server:

npm run dev

## Usage

Once the server is running, you can use the following endpoints to interact with the Trading API:

- **POST /login**: Log in with your AngelBroking credentials and receive a JWT token.
- **GET /profile**: Fetch the user profile using the JWT token obtained after login.
- **POST /buy-order**: Place a buy order for a specified stock.
- **POST /sell-order**: Place a sell order for a specified stock.
- **GET /holdings**: Retrieve the current holdings in your portfolio.
