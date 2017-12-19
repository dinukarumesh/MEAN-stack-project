import { Routes, RouterModule }  from '@angular/router';

import { Forms } from './forms.component';
import { Inputs } from './components/inputs/inputs.component';
import { Layouts } from './components/layouts/layouts.component';
import { ShortTermItem } from './components/insertItems/short-term-item/short-term-item.component';
import { MiddleTermItem } from './components/insertItems/middle-term-item/middle-term-item.component';
import { LongTermItem } from './components/insertItems/long-term-item/long-term-item.component';

// noinspection TypeScriptValidateTypes
const routes: Routes = [
  {
    path: '',
    component: Forms,
    children: [
      { path: 'inputs', component: Inputs },
      { path: 'layouts', component: Layouts },
      { path: 'shortTermItemInsert', component: ShortTermItem },
      { path: 'middleTermItemInsert', component: MiddleTermItem },
      { path: 'longTermItemInsert', component: LongTermItem },

    ]
  }
];

export const routing = RouterModule.forChild(routes);
