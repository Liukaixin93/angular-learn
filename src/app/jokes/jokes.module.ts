import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { jokesRoutes } from './jokes.routes';
import { JokesComponent } from './jokes.component';

@NgModule({
  declarations: [
    JokesComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forChild(jokesRoutes), //异步加载子模块用forChild
  ],
  providers: [
    
  ],//放服务的
  bootstrap: [
      
  ],
  entryComponents: [
    
  ]
})
export class JokesModule { }
