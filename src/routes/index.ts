import { Route } from '@tanstack/react-location';
import routeIndex from '@/pages/index-routes';
import routeError from '@/pages/errors/error-routes';

const routes: Array<Route> = [routeIndex, ...routeError];

export default routes;
