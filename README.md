# Fleet Manager Customer Portal

Welcome to the Fleet Manager Customer Portal! This web application allows users to efficiently manage and monitor their fleet of vehicles.

## Getting Started

Follow these instructions to get the app up and running on your local machine.

### Prerequisites

- Node.js: Make sure you have Node.js version 18 installed. You can download it [here](https://nodejs.org/).
- pnpm: Make sure you have `pnpm` installed. You can install it globally using the following command:

  ```bash
  npm install -g pnpm
  ```

### Installation

1. Clone the repository to your local machine:

   ```bash
   git clone https://github.com/lcsvcn/fleet-manager-customer-portal.git
   ```

2. Navigate to the project directory:

   ```bash
   cd fleet-manager-customer-portal
   ```

3. Install dependencies using `pnpm`:

   ```bash
   pnpm install
   ```

4. Open the `/constants/index.js` file and uncomment the testing baseUrl:

   ```javascript
   // Use below for testing
   export const baseUrl = "http://localhost:3100/api/v1";
   ```

### Backend Dependency

The Fleet Manager Customer Portal depends on the Fleet Manager Backend. Make sure to set up and run the backend server by following the instructions in the [Fleet Manager Backend repository](https://github.com/lcsvcn/fleet-manager-backend).

### Running the App

1. Start the development server:

   ```bash
   pnpm start
   ```

2. Open your browser and visit [http://localhost:3000](http://localhost:3000) to view the app.

### CORS Issues (Production)

**Note:** The production version of this app may experience CORS (Cross-Origin Resource Sharing) issues, especially if the backend is hosted on a different domain. Make sure to configure the backend server's CORS settings to allow requests from your production domain.

## Configuration

In the `/constants/index.js` file, you can configure the `baseUrl` for API requests. Make sure to set it to the appropriate value for your Fleet Manager Backend API.

```javascript
// Use below for testing
export const baseUrl = "http://localhost:3100/api/v1";
```

## Usage

1. Register or log in to the Fleet Manager Customer Portal.
2. Explore the dashboard and manage your fleet of vehicles.
3. Customize settings and preferences as needed.

## Contributing

We welcome contributions! If you find a bug or have a feature request, please [open an issue](https://github.com/lcsvcn/fleet-manager-customer-portal/issues) or submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).
