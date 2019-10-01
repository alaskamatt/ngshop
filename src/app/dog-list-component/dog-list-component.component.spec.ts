import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DogListComponentComponent } from './dog-list-component.component';
import { DogComponent } from './dog/dog.component'

describe('DogListComponentComponent', () => {
  let component: DogListComponentComponent;
  let fixture: ComponentFixture<DogListComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DogListComponentComponent, DogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DogListComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get all dogs', () => {
    expect(component.getAll().length).toEqual(100)
  });
});
