import { RouterModule } from '@angular/router';
import { JokesComponent } from './jokes.component';

export const jokesRoutes = [
  {
    path: '',
    component: JokesComponent
  },
  {
    path: 'jokes',
    component: JokesComponent
  },
  {
    path: '**', //路径其他输入，跳转首页
    component: JokesComponent
  },
];

