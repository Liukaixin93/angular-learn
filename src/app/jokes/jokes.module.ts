import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { jokesRoutes } from './jokes.routes';
import { JokesComponent } from './jokes.component';

import { shareModule } from '../share/share.module'

@NgModule({
	declarations: [
		JokesComponent,
	],
	imports: [
		FormsModule,
		RouterModule.forChild(jokesRoutes), //异步加载子模块用forChild
		shareModule,
	],
	providers: [

	],//放服务的
	bootstrap: [

	],
	entryComponents: [

	]
})
export class JokesModule { }
