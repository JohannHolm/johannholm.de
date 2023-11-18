import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass',
})
export class AppComponent implements OnInit {
  ngOnInit() {
    this.updateImage();
  }
  images: string[] = [
    'assets/img/1.png',
    'assets/img/2.png',
    'assets/img/3.png',
  ];
  currentImage: number = 0;
  showImage: boolean = true;

  updateImage() {
    setInterval(() => {
      this.currentImage++;
      this.currentImage = this.currentImage % this.images.length;
      this.showImage = false;
      setTimeout(() => {
        this.showImage = true;
      }, 10);
    }, 5000);
  }
}
