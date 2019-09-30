import { TestBed } from '@angular/core/testing';

import { DogsServiceService } from './dogs-service.service';
import { Dog } from './dog';

describe('DogsServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DogsServiceService = TestBed.get(DogsServiceService);
    expect(service).toBeTruthy();
  });

  it('should have a dogData property', () => {
    const service: DogsServiceService = TestBed.get(DogsServiceService);
    expect(service.dogData).toBeDefined();
  });

  it('should push a dog', () => {
    const service: DogsServiceService = TestBed.get(DogsServiceService);
    service.dogData.push(new Dog('1', 'Spike', 'thumb'));
    expect(service.dogData.length).toEqual(1);
  })

  it('should get a dog', () => {
    const service: DogsServiceService = TestBed.get(DogsServiceService);
    let expected = new Dog('1', 'Spike', 'thumb');
    service.dogData.push(expected);
    let got = service.get('1');
    expect(got).toEqual(expected);
  })

  it('should return all dogs', () => {
    const service: DogsServiceService = TestBed.get(DogsServiceService);
    let expected = new Dog('1', 'Spike', 'thumb');
    service.dogData.push(expected);
    let got = service.all();
    expect(got[0]).toEqual(expected);
    expect(got.length).toEqual(1);
  })
  
  it('should import from JSON', () => {
    const service: DogsServiceService = TestBed.get(DogsServiceService);
    service.import()
    let expected = new Dog('4ziNJuYbfDius', 'relaxed bull dog GIF', 'https://media0.giphy.com/media/4ziNJuYbfDius/100.gif');
    let got = service.all();
    expect(got.length).toEqual(100);
    expect(got[0]).toEqual(expected);

  })
});
