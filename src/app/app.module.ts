import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { from } from 'rxjs';

// import { appRoutes } from './app.route';

import { UserListComponent } from './user-list/user-list.component';
import { OrderListComponent } from './order-list/order-list.component';

import { HomeComponent } from './home/home.component';
import { JokesComponent } from './jokes/jokes.component';

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    OrderListComponent,
    HomeComponent,
    JokesComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    // RouterModule.forRoot(appRoutes),
  ],
  providers: [
    
  ],//放服务的
  bootstrap: [AppComponent],
  entryComponents: [
    
  ]
})
export class AppModule { }
