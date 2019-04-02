import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { homeRoutes } from './home.routes';
import { HomeComponent } from './home.component';
import { PictureComponent } from './picture/picture.component';
import { WordComponent } from './word/word.component';

import { shareModule } from '../share/share.module'

@NgModule({
  declarations: [
    HomeComponent,
    PictureComponent,
    WordComponent,
  ],
  imports: [
    FormsModule,
    RouterModule.forChild(homeRoutes), //异步加载的子模块
    shareModule,
  ],
  providers: [
    
  ],//放服务的
  bootstrap: [
      
  ],
  entryComponents: [
    
  ]
})
export class HomeModule { }
