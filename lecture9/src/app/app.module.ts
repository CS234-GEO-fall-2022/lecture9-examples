import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { PageNotExistsComponent } from './page-not-exists/page-not-exists.component';
import { TestWithParamsComponent } from './test-with-params/test-with-params.component';
import { Child1Component } from './child1/child1.component';
import { Child2Component } from './child2/child2.component';
import { UserModule } from './user/user.module';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    PageNotExistsComponent,
    TestWithParamsComponent,
    Child1Component,
    Child2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
