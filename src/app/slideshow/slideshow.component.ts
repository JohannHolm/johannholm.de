import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrl: './slideshow.component.sass',
})
export class SlideshowComponent implements OnInit {
  ngOnInit() {
    this.updateImage();
  }
  images: string[] = [
    'assets/img/1.png',
    'assets/img/2.png',
    'assets/img/3.png',
  ];
  headlines: string[] = [
    'Bring engineering to the next level',
    'Passionate coder',
    'Never stop improving yourself',
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
      }, 1);
    }, 5000);
  }
}
