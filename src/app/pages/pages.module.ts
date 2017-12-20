import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule }  from '@angular/common';

import { routing }       from './pages.routing';
import { NgaModule } from '../theme/nga.module';
import { AppTranslationModule } from '../app.translation.module';

import { ValidateService } from '../services/validate.service';
//import { AuthService } from '../services/auth.service';
import { InsertItemsService } from '../services/insert-items.service';
import { FlashMessagesModule } from 'angular2-flash-messages';
//import { AuthGuard } from './guards/auth.guard';


import { Pages } from './pages.component';
import { ItemAllocationComponent } from './item-allocation/item-allocation.component';
import { AllocationComponent } from './item-allocation/allocation/allocation.component';
import { AvailabilityComponent } from './item-allocation/availability/availability.component';
import { NotificationComponent } from './notification/notification.component';
import { MiddleTermTermComponent } from './notification/middle-term-term/middle-term-term.component';

import { Dashboard } from './dashboard/dashboard.component';
import { Register } from './register/register.component';
import { Login } from './login/login.component';

@NgModule({
  imports: [
    CommonModule, 
    AppTranslationModule, 
    NgaModule, 
    routing,
    BrowserModule,
    FormsModule,
    HttpModule,
    FlashMessagesModule
  ],
  providers: [ValidateService,InsertItemsService],
  declarations: [Pages, ItemAllocationComponent, AllocationComponent, AvailabilityComponent, NotificationComponent, MiddleTermTermComponent]
})
export class PagesModule {
}
 