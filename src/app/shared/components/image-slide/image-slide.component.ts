import { Component, Input, OnInit } from '@angular/core';
import { ImagesPosterInterface } from '../../interfaces/ImagesPoster.interface';

@Component({
  selector: 'app-image-slide',
  templateUrl: './image-slide.component.html',
  styleUrls: ['./image-slide.component.scss'],
})
export class ImageSlideComponent implements OnInit {

  @Input() imageSlide: ImagesPosterInterface[];

  slideOpts = {
    initialSlide: 0,
    speed: 400,
    slidesPerView: 3.5,
    spaceBetween: 4,
  };

  constructor() {}
  ngOnInit() {}

}
