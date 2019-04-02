import { RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';

export const homeRoutes = [
    {
      path: '',
      component: HomeComponent
    },
    {
      path: 'home',
      component: HomeComponent
    },
    {
      path: '**', //路径其他输入，跳转首页
      component: HomeComponent
    },
];

