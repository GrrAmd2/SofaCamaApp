import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SearchPage } from './pages/search.page';
import { ExploreContainerComponentModule } from '../../explore-container/explore-container.module';

import { SearchRoutingModule } from './search-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule,
    ExploreContainerComponentModule,
    SearchRoutingModule
  ],
  declarations: [SearchPage]
})
export class SearchModule {}
