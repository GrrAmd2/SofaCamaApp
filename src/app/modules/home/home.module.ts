import { NgModule } from '@angular/core';

import { HomePage } from './pages/home.page';
import { HomeRoutingModule } from './home-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { ReminderAlertComponent } from './components/reminder-alert/reminder-alert.component';
import { PopularListsComponent } from './components/popular-lists/popular-lists.component';

@NgModule({
  imports: [
    SharedModule,
    HomeRoutingModule
  ],
  declarations: [HomePage, ReminderAlertComponent, PopularListsComponent]
})
export class HomeModule {}
