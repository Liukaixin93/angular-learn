import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { homeRoutes } from './home.routes';
import { HomeComponent } from './home.component';

@NgModule({
  declarations: [
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forChild(homeRoutes), //异步加载的子模块
  ],
  providers: [
    
  ],//放服务的
  bootstrap: [
      
  ],
  entryComponents: [
    
  ]
})
export class HomeModule { }
