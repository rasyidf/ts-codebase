import { ReactElement, ReactNode } from 'react';
import { ReactLocation, Router } from '@tanstack/react-location';

import routes from '@/routes/index';

export const location = new ReactLocation();

interface RouteProps {
  children: ReactNode;
}

const RouteProvider = ({ children }: RouteProps): ReactElement => (
  <Router location={location} routes={routes}>
    {children}
  </Router>
);

export default RouteProvider;
