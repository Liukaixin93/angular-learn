import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OrderListComponent } from './order-list/order-list.component';
import { UserListComponent } from './user-list/user-list.component';

const routes: Routes = [
	{
		path: '', //空，默认打开home页
		redirectTo: 'home',
		pathMatch: 'full',
	},
	{
		path: 'home',
		loadChildren: './home/home.module#HomeModule'
	},
	{
		path: 'jokes',
		loadChildren: './jokes/jokes.module#JokesModule'
	},
	{
		path: 'order-list',
		component: OrderListComponent,
	},
	{
		path: 'user-list',
		component: UserListComponent,
	},
	{
		path: '**', //路径其他输入，跳转首页
		loadChildren: './home/home.module#HomeModule'
	},
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
