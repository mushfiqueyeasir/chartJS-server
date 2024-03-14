# Chart.js Data Server

This Node.js Express server is designed to serve data for Chart.js visualization. It combines data from JSON files containing questions and answers and provides a route for processed data.

## Getting Started

### Prerequisites

- Node.js installed on your machine

### Installation

1. Clone this repository to your local machine:

git clone <repository-url>
2. Navigate to the project directory:
cd chartjs-data-server
3. Install dependencies:
npm install


### Usage

1. Start the server:

```
npm run dev
```

2. Access the APIs using the following routes:

- `https://chart-js-server.vercel.app/api/v1/answer`: Retrieves questions data from the JSON file.
- `https://chart-js-server.vercel.app/api/v1/question`: Retrieves answers data from the JSON file.
- `https://chart-js-server.vercel.app/api/v1/processed`: Combines questions and answers data and provides processed data.

## Project Structure

- `app.js`: Entry point of the application.
- `content/`: Directory containing JSON files for questions and answers.
- `controller/`: Directory containing controller for all the routes.
- `service/`: Directory containing services for all the routes.
- `routes/`: Directory containing route handlers for different APIs.

## Contributing

Contributions are welcome! Please feel free to submit pull requests or open issues for any bugs or feature requests.


## Acknowledgements

- This project utilizes Node.js, Express, and Chart.js.
- Special thanks to the contributors of Chart.js for providing a powerful visualization library.
  
## Contact

For any inquiries or support, please contact Mushfique Yeasir(mailto:mushfiqueyeasir.com).
