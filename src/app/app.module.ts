import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { from } from 'rxjs';

import { TestInterpolationComponent } from './test-interpolation/test-interpolation.component';
import { TestTemplateRefVarComponent } from './test-template-ref-var/test-template-ref-var.component';
import { FontResizerComponent } from './test-template-ref-var/font-resizer/font-resizer.component';
import { TestPipeComponent } from './test-pipe/test-pipe.component';
import { ComponentCommunicationComponent } from './component-communication/component-communication.component';
import { ParentAndChildComponent } from './component-communication/parent-and-child/parent-and-child.component';
import { ChildComponent } from './component-communication/parent-and-child/child/child.component';
import { BrotherAndBrotherComponent } from './component-communication/brother-and-brother/brother-and-brother.component';
import { ChildOneComponent } from './component-communication/brother-and-brother/child-one/child-one.component';
import { ChildTwoComponent } from './component-communication/brother-and-brother/child-two/child-two.component';
import { LocalStorageComponent } from './component-communication/local-storage/local-storage.component';
import { ChildFirstComponent } from './component-communication/local-storage/child-first/child-first.component';
import { ChildSecondComponent } from './component-communication/local-storage/child-second/child-second.component';
import { LifeCycleComponent } from './life-cycle/life-cycle.component';
import { TestOnChangesComponent } from './test-on-changes/test-on-changes.component';
import { Child111Component } from './test-on-changes/child111/child111.component';
import { TestNgContentComponent } from './test-ng-content/test-ng-content.component';
import { Child22Component } from './test-ng-content/child22/child22.component';

@NgModule({
  declarations: [
    AppComponent,
    TestInterpolationComponent,
    TestTemplateRefVarComponent,
    FontResizerComponent,
    TestPipeComponent,
    ComponentCommunicationComponent,
    ParentAndChildComponent,
    ChildComponent,
    BrotherAndBrotherComponent,
    ChildOneComponent,
    ChildTwoComponent,
    LocalStorageComponent,
    ChildFirstComponent,
    ChildSecondComponent,
    LifeCycleComponent,
    TestOnChangesComponent,
    Child111Component,
    TestNgContentComponent,
    Child22Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
