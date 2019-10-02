import { Component, OnInit } from '@angular/core';
import { DogsServiceService } from '../dogs-service.service';
import { Dog } from '../dog';

@Component({
  selector: 'app-dog-list-component',
  templateUrl: './dog-list-component.component.html',
  styleUrls: ['./dog-list-component.component.css']
})
export class DogListComponentComponent implements OnInit {

  dogs: Dog[];
  favorites: boolean;

  constructor(private dogService:DogsServiceService) {
    //dogService.import();
    this.getAll();
    this.favorites = false;
  }

  

  ngOnInit() {
  }

  getAll() {
    this.dogService.all().subscribe(data => this.dogs = (data as Dog[]));
  }

  showAll(){
    this.favorites = false;
  }

  showFavorites() {
    this.favorites = true;
  }

}
