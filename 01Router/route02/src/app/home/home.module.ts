import { CustomMaterialModule } from './../custom-material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { HeaderComponent } from './header/header.component';
import { AsideComponent } from './aside/aside.component';
import { CalendarComponent } from './calendar/calendar.component';
import { AddressBookComponent } from './address-book/address-book.component';
import { LogbookComponent } from './logbook/logbook.component';
import { ToDoListComponent } from './to-do-list/to-do-list.component';
import { FileComponent } from './file/file.component';
import { LeaveComponent } from './leave/leave.component';
import { ReimburseComponent } from './reimburse/reimburse.component';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    CustomMaterialModule
  ],
  declarations: [
    HomeComponent, HeaderComponent, AsideComponent,
    CalendarComponent, AddressBookComponent, LogbookComponent, ToDoListComponent, FileComponent, LeaveComponent, ReimburseComponent
  ],
  exports: [CustomMaterialModule]
})
export class HomeModule { }
