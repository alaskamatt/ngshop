import { Injectable } from '@angular/core';
import { Dog } from './dog';
// let jsonData = require('./dogdata.json');
import jsonData from './dogdata.json'

@Injectable({
  providedIn: 'root'
})
export class DogsServiceService {
  dogData: Dog[]
  constructor() { 
    this.dogData = []
  }

  import() {
    for (let i = 0; i < jsonData.length; i++){
      let data = jsonData[i]
      this.dogData.push(new Dog(data.id, data.name, data.thumbnail))
    }
  }

  get(id:string) {
    for (let i = 0; i < this.dogData.length; i++){
      if (this.dogData[i].id === id) {
        return this.dogData[i]
      }
    }

    return null
  }

  all() {
    return this.dogData
  }
}
