import { setupServer } from 'msw/node';
import '@testing-library/jest-dom';
import { handlers } from './handlers';

// Set up and start the mock server
export const server = setupServer(...handlers);

// Start the server
server.listen();
