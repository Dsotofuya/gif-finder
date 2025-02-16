import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HistoryNavComponent } from './components/history-nav/history-nav.component';



@NgModule({
  declarations: [
    HistoryNavComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HistoryNavComponent
  ]
})
export class SharedModule { }
