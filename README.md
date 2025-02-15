# Tukituki Validator

Tukituki Validator is a backend service built with NestJS and Prisma, designed to manage multisignature (multisig) wallets across multiple Ethereum-compatible blockchains. The service handles the creation and verification of multisig wallets, manages pending transactions, and ensures secure and efficient transaction confirmations using the Safe API Kit.

## Table of Contents

- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Configuration](#configuration)
- [Running the Application](#running-the-application)
- [Scripts](#scripts)
- [Testing](#testing)
- [Project Structure](#project-structure)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [License](#license)

## Features

- **Multisig Wallet Management**: Create and manage multisignature wallets on supported blockchains.
- **Pending Transaction Handling**: Automatically checks and confirms pending transactions using cron jobs.
- **Blockchain Integration**: Supports multiple Ethereum-compatible chains including Optimism, Base, Linea, Arbitrum, and Avalanche.
- **Secure Configuration**: Utilizes environment variables for sensitive configurations.
- **Robust Testing**: Includes end-to-end tests to ensure reliability and stability.

## Prerequisites

- [Node.js](https://nodejs.org/) (v18 or later)
- [npm](https://www.npmjs.com/) or [Yarn](https://yarnpkg.com/)
- [PostgreSQL](https://www.postgresql.org/) database
- [Prisma](https://www.prisma.io/) CLI

## Installation

1. **Clone the Repository**

   ```bash
   git clone git@github.com:tukituki-ai/tukituki-validator.git
   cd tukituki-validator
   ```

2. **Install Dependencies**

   Using npm:

   ```bash
   npm install
   ```

   Or using Yarn:

   ```bash
   yarn install
   ```

3. **Set Up the Database**

   Ensure you have PostgreSQL installed and running. Create a new database for the application.

4. **Configure Environment Variables**

   Create a `.env` file in the root directory and add the following variables:

   ```env
   DATABASE_URL=postgresql://user:password@localhost:5432/tukituki_validator
   RPC_URL_ARBITRUM=your_arbitrum_rpc_url
   RPC_URL_BASE=your_base_rpc_url
   RPC_URL_LINEA=your_linea_rpc_url
   RPC_URL_OPTIMISM=your_optimism_rpc_url
   RPC_URL_AVALANCHE=your_avalanche_rpc_url
   AGENT_PRIVATE_KEY=your_agent_private_key
   ```

   **Note**: Replace the placeholders with your actual configuration values.

5. **Run Prisma Migrations**

   ```bash
   npx prisma migrate dev --name init
   ```

## Configuration

The application uses several configuration files:

- **`tsconfig.json`**: TypeScript configuration.
- **`.gitignore`**: Specifies files and directories to be ignored by Git.
- **`package.json`**: Manages project dependencies and scripts.
- **`nest-cli.json`**: NestJS CLI configuration.
- **`schema.prisma`**: Prisma schema for database models.
- **`.eslintrc.js`**: ESLint configuration for code linting.
- **`.prettierrc`**: Prettier configuration for code formatting.

Ensure all configurations are appropriately set according to your development environment.

## Running the Application

### Development Mode

To run the application in development mode with hot-reloading:

```bash
npm run start:dev
```

Or with Yarn:

```bash
yarn start:dev
```

The server will start on `http://localhost:3001`.

### Production Mode

To build and run the application in production mode:

1. **Build the Application**

   ```bash
   npm run build
   ```

   Or with Yarn:

   ```bash
   yarn build
   ```

2. **Start the Application**

   ```bash
   npm run start:prod
   ```

   Or with Yarn:

   ```bash
   yarn start:prod
   ```

## Scripts

The following scripts are available in the `package.json`:

- **`build`**: Compiles the application using NestJS.
- **`format`**: Formats the codebase using Prettier.
- **`start`**: Starts the application.
- **`start:dev`**: Starts the application in development mode with watch mode.
- **`start:debug`**: Starts the application in debug mode.
- **`start:prod`**: Runs the compiled application in production.
- **`lint`**: Lints the codebase using ESLint and fixes issues.
- **`test`**: Runs the test suite using Jest.
- **`test:watch`**: Runs tests in watch mode.
- **`test:cov`**: Generates test coverage reports.
- **`test:debug`**: Runs tests in debug mode.
- **`test:e2e`**: Runs end-to-end tests.

## Testing

The application uses Jest for testing. To run the tests, execute:

```bash
npm run test
```

For end-to-end tests:

```bash
npm run test:e2e
```

Ensure the application is properly configured before running tests.

## Project Structure

```
tukituki-verify/
├── src/
│   ├── app.module.ts
│   ├── main.ts
│   ├── config/
│   │   └── rpcConfig.service.ts
│   ├── prisma/
│   │   └── prisma.service.ts
│   └── multisig/
│       ├── multisig.module.ts
│       └── multisig.service.ts
├── test/
│   └── app.e2e-spec.ts
├── prisma/
│   └── schema.prisma
├── .gitignore
├── nest-cli.json
├── package.json
├── tsconfig.json
├── tsconfig.build.json
├── .eslintrc.js
├── .prettierrc
└── README.md
```

## Technologies Used

- **[NestJS](https://nestjs.com/)**: A progressive Node.js framework for building efficient and scalable server-side applications.
- **[Prisma](https://www.prisma.io/)**: Next-generation ORM for Node.js and TypeScript.
- **[TypeScript](https://www.typescriptlang.org/)**: A typed superset of JavaScript that compiles to plain JavaScript.
- **[Safe API Kit](https://github.com/safe-global/safe-gateway-api)**: API toolkit for interacting with Safe contracts.
- **[Viem](https://viem.sh/)**: Lightweight TypeScript library for Ethereum.
- **[ESLint](https://eslint.org/)**: A tool for identifying and fixing problematic patterns in JavaScript code.
- **[Prettier](https://prettier.io/)**: An opinionated code formatter.
- **[Jest](https://jestjs.io/)**: A delightful JavaScript Testing Framework with a focus on simplicity.

## Contributing

Contributions are welcome! Please follow these steps to contribute:

1. **Fork the Repository**

   Click the "Fork" button at the top right of the repository page.

2. **Clone Your Fork**

   ```bash
   git clone git@github.com:tukituki-ai/tukituki-validator.git
   cd tukituki-validator
   ```

3. **Create a New Branch**

   ```bash
   git checkout -b feature/YourFeatureName
   ```

4. **Make Your Changes**

   Implement your feature or bug fix.

5. **Commit Your Changes**

   ```bash
   git commit -m "Add your message here"
   ```

6. **Push to Your Fork**

   ```bash
   git push origin feature/YourFeatureName
   ```

7. **Create a Pull Request**

   Go to the original repository and click on "New Pull Request".

## License

This project is licensed under the [UNLICENSED](LICENSE) license.
