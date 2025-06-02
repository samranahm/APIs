# NumSense API

NumSense is a simple API that checks whether a given number is even or odd.

## Features
- Accepts a number as a parameter
- Determines if the number is even or odd
- Returns a JSON response with the number and its status

## Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/samranahm/NumSense.git
   cd NumSense
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the server:
   ```sh
   npm start
   ```

## API Usage

### Endpoint
```
GET /api/numsense/:number
```

### Example Request
```
GET /api/numsense/10
```

### Example Response
```json
{
    "number": 10,
    "isEven": true,
    "isOdd": false,
    "status": "Even"
}
```

## License
This project is open-source and available under the MIT License.
