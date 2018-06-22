import { Routes , RouterModule } from '@angular/router';
import { UserInfoListComponent } from './components/user-info-list/user-info-list.component';
import { UserDetailComponent } from './components/user-detail/user-detail.component';
import { RegisterModuleComponent } from './components/register-module/register-module.component';
import { LoginModuleComponent } from './components/login-module/login-module.component';
import { AboutModuleComponent } from './components/about-module/about-module.component';
import { ErrorComponent} from './components/error/error.component';
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
        path: 'about',
        component: AboutModuleComponent
    },
    {
        path: '404',
        component: ErrorComponent
    },
    {
        path: '**',
        redirectTo: '/404'
    }

]

export const routing = RouterModule.forRoot(routes);
