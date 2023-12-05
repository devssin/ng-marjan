import { Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';

export const routes: Routes = [
    {
        path: 'admin',
        component: AdminComponent
    },
    {
        path: 'admin-dashboard',
        component: AdminDashboardComponent
    }
];
