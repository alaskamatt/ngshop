import { Injectable } from '@angular/core';
import { Dog } from './dog';
import { HttpClient } from '@angular/common/http';
import jsonData from './dogdata.json'
import config from '../assets/config.json'
@Injectable({
  providedIn: 'root'
})
export class DogsServiceService {
  dogData: Dog[]
  constructor(private http: HttpClient) { 
    this.dogData = []
  }

  baseURL: string = 'https://ngshop-rest-api.herokuapp.com'

  all() {
    return this.http.get(this.baseURL + config.dogs)
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
}
