import { Component, OnInit } from '@angular/core';
import { DogsServiceService } from '../dogs-service.service';
import { Dog } from '../dog';

@Component({
  selector: 'app-dog-list-component',
  templateUrl: './dog-list-component.component.html',
  styleUrls: ['./dog-list-component.component.css']
})
export class DogListComponentComponent implements OnInit {

  dogs: Dog[]

  constructor(private dogService:DogsServiceService) {
    dogService.import();
    this.dogs = this.getAll();
  }

  

  ngOnInit() {
  }

  getAll() {
    return this.dogService.all();
  }

}
