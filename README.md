# Multiple APIs Analysis Dashboard

This project is a Next.js-based application built to provides functionalities to fetch weather data, finance insights, and news articles using external APIs. The application utilizes best practices for folder structure, modularity, and API integration.

## Features

- **Weather Information**:
  - Fetches real-time weather data using OpenWeatherMap API.
  - Retrieves geographical coordinates of a city.
- **Finance Insights**:
  - Searches stock symbols and retrieves daily time series data using Alpha Vantage API.
  - Fetches latest financial news and sentiments.
- **News Updates**:
  - Fetches top headlines and news articles using NewsAPI.
  - Supports search functionality for specific topics.

## Technologies Used

- **Next.js** for building the frontend and server-side rendering.
- **TypeScript** for type safety and scalability.
- **Axios** for API requests.
- **Environment Variables** for secure API key management.

## API Integrations

### Weather API (OpenWeatherMap)
- **Base URL**: `https://api.openweathermap.org`
- Endpoints:
  - `/geo/1.0/direct`: Get geographical coordinates by city name.
  - `/data/2.5/weather`: Get weather data by latitude and longitude.

### Finance API (Alpha Vantage)
- **Base URL**: `https://www.alphavantage.co`
- Endpoints:
  - `/query` with `SYMBOL_SEARCH`: Search for stock symbols.
  - `/query` with `TIME_SERIES_DAILY`: Retrieve daily stock data.
  - `/query` with `NEWS_SENTIMENT`: Fetch financial news and sentiment analysis.

### News API (NewsAPI)
- **Base URL**: `https://newsapi.org/v2`
- Endpoints:
  - `/top-headlines`: Fetch top news headlines.
  - `/everything`: Search for news articles based on queries.

## Setup Instructions

1. Clone the repository:
   ```bash
   git clone <repository_url>
   ```

2. Navigate to the project directory:
   ```bash
   cd PGAGI-Assignment
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Create a `.env.local` file in the root directory (check for env.sample file) and add the following environment variables:
   ```env
   NEXT_PUBLIC_OPENWEATHER_API_KEY=<Your_OpenWeatherMap_API_Key>
   NEXT_PUBLIC_ALPHAVANTAGE_API_KEY=<Your_AlphaVantage_API_Key>
   NEXT_PUBLIC_NEWS_API_KEY=<Your_NewsAPI_Key>
   ```

5. Run the development server:
   ```bash
   npm run dev
   ```

6. Open your browser and navigate to:
   ```
   http://localhost:3000
   ```

## Project Structure Highlights

- **API Integration**: Axios instances are configured in `lib/api/axios.ts` for modular and reusable API calls.
- **Components**: Reusable UI components are organized under `src/components`.

## License

This project is licensed under the MIT License. Feel free to use and modify it as needed.

---

For any queries or contributions, feel free to contact the author.
