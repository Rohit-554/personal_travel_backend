# Maestro - The Backend 

The backend built for **[Trip Sage](https://github.com/Rohit-554/TripSage-frontend)** with Node.js, Express.js, MongoDB, and GROQ API, providing a robust and scalable infrastructure for handling API requests, data storage, and business logic.

## Tech Stack

### Backend

   ![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat&logo=node.js&logoColor=white) ![Express.js](https://img.shields.io/badge/Express.js-000000?style=flat&logo=express&logoColor=white) ![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=flat&logo=mongodb&logoColor=white) ![GROQ API](https://img.shields.io/badge/GROQ-1E4C5F?style=flat&logo=google&logoColor=white)


## Features

- **RESTful API:** Provides endpoints for managing users, itineraries
- **Authentication:** Secure user authentication and authorization using JWT.

## End Points

``` http://localhost:9000 ```
- **`/`:** Landing page
- **`api/signup`:** Let's you signup
- **`api/continue`:** Continue without login
- **`api/getPlaces`:** get the itineraries

**Signup Curl**
```bash
curl --location 'https://personal-travel-backend.onrender.com/api/auth/signup' \
--header 'Content-Type: application/json' \
--data '{
  "email": "email",
  "password": "password"
}'
```

**Login Curl**
```bash
curl --location 'https://personal-travel-backend.onrender.com/api/auth/signup' \
--header 'Content-Type: application/json' \
--data '{
  "email": "email",
  "password": "password"
}'
```

**getPlaces Curl**
```bash
curl --location 'http://localhost:9000/api/getPlaces' \
--header 'Authorization: Bearer $token from login signup or continue' \
--header 'Content-Type: application/json' \
--data '{ 
  "destinationCountry": "India", 
  "budget": "5000", 
  "travelStyle": "relaxing", 
  "interestsNew": "nature", 
  "accommodationType": "hotel", 
  "transportationType": "public transportation", 
  "activityType": "outdoor", 
  "cuisineType": "local", 
  "tripDuration": "5", 
  "language": "English"
}'
```

## Getting Started

### Prerequisites

- **Node.js** and **npm** (or **yarn**)
- **MongoDB** installed and running locally or on a cloud provider like MongoDB Atlas

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Rohit-554/personal_travel_backend.git
   ```

2. Install the dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Set up environment variables:
   Create a `.env` file in the root directory with the following variables:
   ```plaintext
    MONGODB_URI=YourMongoDbUri
    JWT_SECRET=generateinyourpc
    GROQ_API_KEY=GroqApiKey
    PORT=9000
   ```

4. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. The server should now be running at `http://localhost:9000`.


### Testing

To run the tests, use:

```bash
npm server.js
```

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request.

## License

This project is licensed under the MIT License

---
Made with ♥ -- Thankyou for Visiting
