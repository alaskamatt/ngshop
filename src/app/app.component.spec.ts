import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import {DogListComponentComponent} from './dog-list-component/dog-list-component.component'
import {DogComponent} from './dog-list-component/dog/dog.component'

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        DogListComponentComponent,
        DogComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

});
