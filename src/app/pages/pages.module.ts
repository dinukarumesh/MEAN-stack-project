import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule }  from '@angular/common';

import { routing }       from './pages.routing';
import { NgaModule } from '../theme/nga.module';
import { AppTranslationModule } from '../app.translation.module';


//services
import{ReportItemService} from '../services/report-item.service';
import{RequestNewService} from '../services/request-new.service';
import{RequestExistingService} from '../services/request-existing.service';
import{ItemAllocationService} from '../services/item-allocation.service';
import { ValidateService } from '../services/validate.service';
//import { AuthService } from '../services/auth.service';
import { InsertItemsService } from '../services/insert-items.service';

//import { AuthGuard } from './guards/auth.guard';


import { Pages } from './pages.component';
/* import { ItemAllocationComponent } from './item-allocation/item-allocation.component';
import { AllocationComponent } from './item-allocation/allocation/allocation.component';
import { AvailabilityComponent } from './item-allocation/availability/availability.component';
import { NotificationComponent } from './notification/notification.component';
import { ItemtypeComponent } from './item-allocation/itemtype/itemtype.component'; */


@NgModule({
  imports: [
    CommonModule, 
    AppTranslationModule, 
    NgaModule, 
    routing,
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [ValidateService,
    InsertItemsService,
    ReportItemService,
    RequestNewService,
    ItemAllocationService,
    RequestExistingService
  ],
  declarations: [Pages]
})
export class PagesModule {
}
 