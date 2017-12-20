import { Routes, RouterModule }  from '@angular/router';

import { ItemAllocationComponent } from './item-allocation.component';
import { AllocationComponent  } from './allocation/allocation.component';
import { AvailabilityComponent } from './availability/availability.component';
import { ItemtypeComponent } from './itemtype/itemtype.component';


// noinspection TypeScriptValidateTypes
const routes: Routes = [
  {
    path: '',
    component: ItemAllocationComponent,
    children: [     
      { path: 'allocation', component: AllocationComponent },
      { path: 'availability', component: AvailabilityComponent },
      { path: 'itemtype', component: ItemtypeComponent }
    ]
  }
];

export const routing = RouterModule.forChild(routes);
