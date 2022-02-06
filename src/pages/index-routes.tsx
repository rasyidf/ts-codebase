import { Route } from '@tanstack/react-location';
import { ReactElement } from 'react';

const indexPage = async (): Promise<ReactElement> =>
  import('@/pages/index').then(({ default: DefaultLayout }) => <DefaultLayout name="World" />);

const routes: Array<Route> = [
  {
    path: '/',
    element: indexPage,
    pendingElement: async () => <div>Taking a long time...</div>,
    pendingMs: 1000 * 4, // 4 seconds
    pendingMinMs: 500, // 0.5 seconds
  },
];

export default routes;
