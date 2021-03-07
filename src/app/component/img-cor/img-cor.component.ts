import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-img-cor',
  templateUrl: './img-cor.component.html',
  styleUrls: ['./img-cor.component.css']
})
export class ImgCorComponent implements OnInit {

  items = document.getElementsByClassName("carousel__photo");
  totalItems: number;
  slide = 0;
  moving: boolean;
  itemClassName = "carousel__photo";
  myTimer;
  constructor() { }

  ngOnInit(): void {
  }

  moveNext() {
    this.totalItems = this.items.length;

    if (this.slide === (this.totalItems - 1)) {
      this.slide = 0;

    } else {
      this.slide++;
    }

    this.moveCarouselTo(this.slide);

  }
  movePrev() {

    this.totalItems = this.items.length;
    if (this.slide === 0) {
      this.slide = (this.totalItems - 1);
    } else {
      this.slide--;
    }
    this.moveCarouselTo(this.slide);

  }
  current() {

    this.totalItems = this.items.length;

    if (this.slide === (this.totalItems - 1)) {
      this.slide = 0;

    } else {
      this.slide++;
    }

    this.moveCarouselTo(this.slide);


  }

  moveCarouselTo(slide) {
    var newPrevious = slide - 1,
      newNext = slide + 1;

    if (slide === 0) {
      newPrevious = (this.totalItems - 1);


    } else if (slide === (this.totalItems - 1)) {
      newPrevious = (slide - 1);
      newNext = 0;

    }

    this.items[newPrevious].className = this.itemClassName + " prev";

    this.items[slide].className = this.itemClassName + " active";

    this.items[newNext].className = this.itemClassName + " next";

  }



}
