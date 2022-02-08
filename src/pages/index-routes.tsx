import { ReactElement } from 'react';
import { Route } from '@tanstack/react-location';

const indexPage = async (): Promise<ReactElement> =>
  import('@/pages/index').then(({ default: DefaultLayout }) => <DefaultLayout name="World" />);

const aboutPage = async (): Promise<ReactElement> =>
  import('@/pages/app/about/about.page').then(({ default: DefaultLayout }) => <DefaultLayout />);

const listPage = async (): Promise<ReactElement> =>
  import('@/pages/app/list').then(({ default: DefaultLayout }) => <DefaultLayout />);

const MainLayout = async (): Promise<ReactElement> =>
  import('@/components/layouts/main').then(({ default: DefaultLayout }) => <DefaultLayout />);

const routes: Route = {
  path: '/',
  element: MainLayout,
  pendingMs: 1000 * 4, // 4 seconds
  pendingMinMs: 500, // 0.5 seconds
  children: [
    {
      path: 'about',
      element: aboutPage,
    },
    {
      path: 'list',
      element: listPage,
    },
    {
      element: indexPage,
    },
  ],
};
export default routes;
