import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabOneComponent } from './page/tab-one.component';
import { TabOneRoutingModule } from './tab-one-routing.module';



@NgModule({
  declarations: [TabOneComponent],
  imports: [
    CommonModule,
    TabOneRoutingModule
  ]
})
export class TabOneModule { }
