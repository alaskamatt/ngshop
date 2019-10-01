import { Component, OnInit, Input } from '@angular/core';
import { Dog } from 'src/app/dog';

@Component({
  selector: 'app-dog',
  templateUrl: './dog.component.html',
  styleUrls: ['./dog.component.css']
})
export class DogComponent implements OnInit {

  @Input() dog: Dog;

  counter: number;

  constructor() {
    this.counter = 0;
     }

  ngOnInit() {
  }

  incrementCounter() {
    this.counter += 1
  }

  toggleFavorite() {
    this.dog.favorite = !this.dog.favorite;
  }

}
