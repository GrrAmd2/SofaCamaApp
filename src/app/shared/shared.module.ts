import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ImageSlideComponent } from './components/image-slide/image-slide.component';



@NgModule({
  declarations: [ImageSlideComponent],
  imports: [
    CommonModule,
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
  ],
  exports: [
    CommonModule,
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    ImageSlideComponent
  ]
})
export class SharedModule { }
