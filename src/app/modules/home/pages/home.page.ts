import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {

  title = 'SofaCama';
  images = [
    {
      urlImage: 'https://picsum.photos/105/150'
    },
    {
      urlImage: 'https://picsum.photos/105/150'
    },
    {
      urlImage: 'https://picsum.photos/105/150'
    },
    {
      urlImage: 'https://picsum.photos/105/150'
    },
    {
      urlImage: 'https://picsum.photos/105/150'
    },
    {
      urlImage: 'https://picsum.photos/105/150'
    },
    {
      urlImage: 'https://picsum.photos/105/150'
    },
    {
      urlImage: 'https://picsum.photos/105/150'
    },
    {
      urlImage: 'https://picsum.photos/105/150'
    }
  ];
  constructor() {}

}
