import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TabTwoComponent } from './page/tab-two.component';

const routes: Routes = [
  {
    path: '',
    component: TabTwoComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabTwoRoutingModule {}
