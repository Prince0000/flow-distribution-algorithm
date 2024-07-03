## Flow Distribution Algorithm

## Overview

This Node.js project implements a flow distribution algorithm to connect users with astrologers. The algorithm ensures fair distribution of users among astrologers while allowing adjustment of flow for top astrologers based on user preferences.

## Features

- **Fair Distribution:** Allocate users evenly among astrologers.
- **Top Astrologer Adjustment:** Toggle flow for top astrologers.
- **Scalability:** Handle up to 2000-3000 users and 500 astrologers efficiently.
- **Documentation:** Clear explanation of algorithm and API usage.
- **Testing:** Unit tests to validate functionality.

## Project Structure

```
flow-distribution-algorithm/
│
├── controllers/
│   ├── astrologerController.js    # Logic for distributing users and adjusting top astrologers
│
├── models/
│   ├── astrologer.js              # Astrologer model definition
│   ├── user.js                    # User model definition
│
├── routes/
│   ├── astrologerRoutes.js        # API routes for astrologers
│
├── tests/
│   ├── test.js                    # Unit tests for algorithm functionality
│
├── app.js                         # Main application entry point
├── package.json                   # Project dependencies and scripts
└── README.md                      # Project documentation
```

## Installation

### Prerequisites

- Node.js (v12 or higher)
- npm (v6 or higher)

### Setup

1. **Clone the Repository**

   ```bash
   git clone https://github.com/Prince0000/flow-distribution-algorithm.git
   cd flow-distribution-algorithm
   ```

2. **Install Dependencies**

   ```bash
   npm install
   ```

3. **Run the Application**

   ```bash
   npm start
   ```

   The server will start running on `http://localhost:3000`.

## API Endpoints

### 1. Distribute Users

**Endpoint:** `GET /astrologers/distribute`

**Description:** Distributes users among astrologers.

**Example Request:**

```bash
GET http://localhost:3000/astrologers/distribute
```

### 2. Toggle Top Astrologer

**Endpoint:** `POST /astrologers/toggleTopAstrologer/:id`

**Description:** Toggles top astrologer status by ID.

**Example Request:**

```bash
POST http://localhost:3000/astrologers/toggleTopAstrologer/1
```

### 3. Adjust Top Astrologers

**Endpoint:** `POST /astrologers/adjustTopAstrologers`

**Description:** Adjusts flow for top astrologers.

**Example Request:**

```bash
POST http://localhost:3000/astrologers/adjustTopAstrologers
Content-Type: application/json

{
  "adjustmentFactor": 2
}
```

## Testing

Run unit tests to ensure functionality:

```bash
npm test
```

## Additional Considerations

- **Scalability:** Designed to handle large volumes of users and astrologers efficiently.
- **Performance:** Optimized for speed and reliability.
- **Security:** Implement proper data validation and access control measures.


---

Feel free to contribute to this project by submitting issues or pull requests. For major changes, please open an issue first to discuss what you would like to change.

Happy coding!

---
