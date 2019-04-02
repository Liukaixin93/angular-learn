import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UserInfoComponent } from '../user-info/user-info.component'

@NgModule({
	declarations: [
		UserInfoComponent,
	],
	imports: [
		FormsModule,
	],
	exports: [
		UserInfoComponent
	],
	providers: [

	],//放服务的
	bootstrap: [

	],
	entryComponents: [

	]
})
export class shareModule { }
