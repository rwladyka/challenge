import { rest } from 'msw';
import { mockProduct } from './mocks';

export const handlers = [
  rest.get('/api/products/:productId', (_, res, ctx) => {
    console.log('modafuck');

    return res(ctx.status(200), ctx.json(mockProduct));
  }),
];
