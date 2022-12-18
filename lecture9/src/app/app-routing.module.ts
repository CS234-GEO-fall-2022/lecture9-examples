import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Child1Component } from './child1/child1.component';
import { Child2Component } from './child2/child2.component';
import { PageNotExistsComponent } from './page-not-exists/page-not-exists.component';
import { TestWithParamsComponent } from './test-with-params/test-with-params.component';
import { TestComponent } from './test/test.component';

const routes: Routes = [
  {path: 'test', component: TestComponent},

  {path: '', component: TestComponent},

  {path: 'test/:id/sort/:order', 
   component: TestWithParamsComponent, 
   data: {key: "value"},
   children: [
    {path: 'child-1', component: Child1Component},
    {path: 'child-2', component: Child2Component}
   ]
  },

  {path: '**', component: PageNotExistsComponent},
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
