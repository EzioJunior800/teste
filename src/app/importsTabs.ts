
import { NgModule } from '@angular/core';


import { NzTableModule } from 'ng-zorro-antd/table';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { NzTimePickerModule } from 'ng-zorro-antd/time-picker';

@NgModule({
  exports: [
   
    NzTableModule,
    NzTabsModule,
    NzTagModule,
    NzTimePickerModule,
  ]
})
export class importTabsModule {

}
