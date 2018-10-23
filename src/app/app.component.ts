import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  photos = [
    {
      url: 'https://cdn.motor1.com/images/mgl/0beAj/s1/2019-bmw-m2-competition.jpg',
      description: 'BMW Branca'
    },
    {
      url: 'https://abrilquatrorodas.files.wordpress.com/2018/03/qr-706-car-bmw-x2-0099.jpg?quality=70&strip=info&strip=info',
      description: 'BMW Amarela'
    }
  ];
}
