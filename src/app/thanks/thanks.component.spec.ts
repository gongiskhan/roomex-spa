import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThanksComponent } from './thanks.component';
import {AppModule} from '../app.module';
import {getTranslocoModule} from '../transloco-testing.module';

describe('ThanksComponent', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AppModule, getTranslocoModule()],
    });
  });

  let component: ThanksComponent;
  let fixture: ComponentFixture<ThanksComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ThanksComponent]
    });
    fixture = TestBed.createComponent(ThanksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
