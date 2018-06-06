import { Routes , RouterModule } from '@angular/router';
import { UserInfoListComponent } from './components/user-info-list/user-info-list.component';
import { UserDetailComponent } from './components/user-detail/user-detail.component';
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
        path: '**',
        redirectTo: 'users'
    }

]

export const routing = RouterModule.forRoot(routes);
