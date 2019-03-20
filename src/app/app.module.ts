import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
// import { BrowserAnimationsModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { from } from 'rxjs';

import { AnimationComponent } from './animation/animation.component';
import { TestDynamicComponent } from './test-dynamic/test-dynamic.component';
import { Child1Component } from './test-dynamic/child1/child1.component';
import { TestShadowDomComponent } from './test-shadow-dom/test-shadow-dom.component';
import { TestEmulatedModeComponent } from './test-emulated-mode/test-emulated-mode.component';
import { TestNgContentComponent } from './test-ng-content/test-ng-content.component';
import { ChildTwoComponent } from './test-ng-content/child-two/child-two.component';
import { ChildThreeComponent } from './test-ng-content/child-three/child-three.component';
import { TestContentChildComponent } from './test-content-child/test-content-child.component';
import { ChildFourComponent } from './test-content-child/child-four/child-four.component';
import { ChildFiveComponent } from './test-content-child/child-five/child-five.component';
import { TestViewChildComponent } from './test-view-child/test-view-child.component';

@NgModule({
  declarations: [
    AppComponent,
    AnimationComponent,
    TestDynamicComponent,
    Child1Component,
    TestShadowDomComponent,
    TestEmulatedModeComponent,
    TestNgContentComponent,
    ChildTwoComponent,
    ChildThreeComponent,
    TestContentChildComponent,
    ChildFourComponent,
    ChildFiveComponent,
    TestViewChildComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [
    Child1Component,
  ]
})
export class AppModule { }
