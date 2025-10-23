import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';
import { ROUTES } from '../../helpers/constants';

// Layouts
import { DashboardLayout } from '../components/layout/DashboardLayout';
import { AuthLayout } from '../components/layout/AuthLayout';

// Auth Pages
import { LoginPage } from '../pages/auth/LoginPage';
import { RegisterPage } from '../pages/auth/RegisterPage';
import { ValidateEmailPage } from '../pages/auth/ValidateEmailPage';

// Dashboard Pages
import { DashboardPage } from '../pages/dashboard/DashboardPage';
import { UsersListPage } from '../pages/users/UsersListPage';
import { RolesListPage } from '../pages/roles/RolesListPage';
import { InstitutionsListPage } from '../pages/institutions/InstitutionsListPage';
import { BranchesListPage } from '../pages/branches/BranchesListPage';
import { RoomsListPage } from '../pages/rooms/RoomsListPage';
import { GroupsListPage } from '../pages/groups/GroupsListPage';
import { EventsListPage } from '../pages/events/EventsListPage';
import { OccurrencesListPage } from '../pages/occurrences/OccurrencesListPage';

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public Routes */}
        <Route element={<PublicRoute />}>
          <Route element={<AuthLayout />}>
            <Route path={ROUTES.LOGIN} element={<LoginPage />} />
            <Route path={ROUTES.REGISTER} element={<RegisterPage />} />
            <Route path="/auth/validate-email/:token" element={<ValidateEmailPage />} />
          </Route>
        </Route>

        {/* Private Routes */}
        <Route element={<PrivateRoute />}>
          <Route element={<DashboardLayout />}>
            <Route path={ROUTES.DASHBOARD} element={<DashboardPage />} />
            <Route path={ROUTES.USERS} element={<UsersListPage />} />
            <Route path={ROUTES.ROLES} element={<RolesListPage />} />
            <Route path={ROUTES.INSTITUTIONS} element={<InstitutionsListPage />} />
            <Route path={ROUTES.BRANCHES} element={<BranchesListPage />} />
            <Route path={ROUTES.ROOMS} element={<RoomsListPage />} />
            <Route path={ROUTES.GROUPS} element={<GroupsListPage />} />
            <Route path={ROUTES.EVENTS} element={<EventsListPage />} />
            <Route path={ROUTES.OCCURRENCES} element={<OccurrencesListPage />} />
          </Route>
        </Route>

        {/* Redirect root to login */}
        <Route path="/" element={<Navigate to={ROUTES.LOGIN} replace />} />

        {/* 404 */}
        <Route path="*" element={<Navigate to={ROUTES.LOGIN} replace />} />
      </Routes>
    </BrowserRouter>
  );
};
