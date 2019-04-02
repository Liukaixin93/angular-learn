import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, PreloadAllModules } from '@angular/router';

import { AppComponent } from './app.component';
// import { AppRoutingModule } from './app-routing.module';
import { Routes } from './app.routes';

import { UserListComponent } from './user-list/user-list.component';
import { OrderListComponent } from './order-list/order-list.component';

@NgModule({
	declarations: [
		AppComponent,
		UserListComponent,
		OrderListComponent,
	],
	imports: [
		BrowserModule,
		FormsModule,
		// AppRoutingModule,

		//路由默认配置
		RouterModule.forRoot(Routes),

		//预加载所有模块
		// RouterModule.forRoot(Routes, {preloadingStrategy: PreloadAllModules}),

		//自定义预加载模块
		
	],
	providers: [//放服务的

	],
	bootstrap: [AppComponent],
	entryComponents: [

	]
})
export class AppModule { }
