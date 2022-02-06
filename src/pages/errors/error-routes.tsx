import { Route } from '@tanstack/react-location';
import { ReactElement } from 'react';

const notFoundPage = async (): Promise<ReactElement> =>
  import('@/pages/errors/404').then(({ default: ErrorPage }) => <ErrorPage />);

const routeError: Array<Route> = [
  {
    path: '/404',
    element: notFoundPage,
  },
];

export default routeError;
