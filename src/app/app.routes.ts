import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadChildren: () => import('./auth/auth.routes').then(m => m.AUTH_ROUTES)
    },
    {
        path: 'trips',
        loadChildren: () => import('./trips/trips.routes').then(m => m.TRIPS_ROUTES)
    }

];
