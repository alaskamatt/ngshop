import { Dog } from './dog';

describe('Dog', () => {
  it('should create an instance', () => {
    expect(new Dog('1', 'Rover', 'thumbnail')).toBeTruthy();
  });

  it('should contain an id property string', () => {
    expect(new Dog('1', 'Rover', 'thumbnail').id).toBeTruthy();
  });

  it('should contain a name property string', () => {
    expect(new Dog('1', 'Rover', 'thumbnail').name).toBeTruthy();
  });

  it('should contain a thumbnail string', () => {
    expect(new Dog('1', 'Rover', 'thumbnail').thumbnail).toBeTruthy();
  });

  it('should create a new dog with properties', () => {
    let dog = new Dog('1', 'Rover', 'thumbnail');
    expect(dog.thumbnail).toEqual('thumbnail');
    expect(dog.name).toEqual('Rover');
    expect(dog.id).toEqual('1');
  });
});
