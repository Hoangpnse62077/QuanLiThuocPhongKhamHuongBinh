import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SupplyComponent } from './supply.component';
import { RouterModule } from '@angular/router';
import {SupplyRoutes} from './supply.routing'
import { from } from 'rxjs/observable/from';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(SupplyRoutes),
    SharedModule
  ],
  declarations: [SupplyComponent]
})
export class SupplyModule { }
