import { Routes } from '@angular/router';

import { SupplyComponent } from './supply.component'

export const SupplyRoutes: Routes = [{
  path: '',
  component: SupplyComponent,
  data: {
    breadcrumb: 'QUẢN LÍ VẬT TƯ',
    icon: 'icofont-home bg-c-blue',
    status: false
  }
}];
