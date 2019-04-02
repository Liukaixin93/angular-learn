import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

// import { HomeComponent } from './home/home.component';
// import { JokesComponent } from './jokes/jokes.component';
import { OrderListComponent } from './order-list/order-list.component';
import { UserListComponent } from './user-list/user-list.component';
import { PreloadAllComponent } from './preload-all/preload-all.component';

export const Routes = [
	{
		path: '', //空，默认打开home页
		redirectTo: 'home',
		pathMatch: 'full',
	},
	// {
	// 	path: 'home/:page',
	// 	loadChildren: './home/home.module#HomeModule'
	// },
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
	// {
	// 	path: 'user-list/:page',
	// 	component: UserListComponent,
	// },
	{
		path: 'user-list',
		component: UserListComponent,
	},
	{
		path: 'preload-all',
		loadChildren: './preload-all/preload-all.module#PreloadAllModule'
	},
	{
		path: '**', //路径其他输入，跳转首页
		loadChildren: './home/home.module#HomeModule'
	},
];
