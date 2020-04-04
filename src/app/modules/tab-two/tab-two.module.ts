import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabTwoComponent } from './page/tab-two.component';
import { TabTwoRoutingModule } from './tab-two-routing.module';



@NgModule({
  declarations: [TabTwoComponent],
  imports: [
    CommonModule,
    TabTwoRoutingModule
  ]
})
export class TabTwoModule { }
