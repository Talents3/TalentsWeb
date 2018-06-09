import { Routes , RouterModule } from '@angular/router';
import { UserInfoListComponent } from './components/user-info-list/user-info-list.component';
import { UserDetailComponent } from './components/user-detail/user-detail.component';
import { RegisterModuleComponent } from './components/register-module/register-module.component';
import { LoginModuleComponent } from './components/login-module/login-module.component';
const routes: Routes = [
    {
        path: '',
        redirectTo: 'users',
        pathMatch: 'full'
    },
    {
        path: 'users',
        component: UserInfoListComponent
    },
    {
        path: 'users/:id',
        component: UserDetailComponent
    },
    {
        path: 'register',
        component: RegisterModuleComponent,
        data: { title: 'Sign Up' }
    },
    {
        path: 'login',
        component: LoginModuleComponent,
        data: { title: 'Login' }
    },
    {
        path: '**',
        redirectTo: 'users'
    }

]

export const routing = RouterModule.forRoot(routes);
