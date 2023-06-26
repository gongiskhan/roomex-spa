import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnterComponent } from './enter.component';
import {AppModule} from '../app.module';
import {getTranslocoModule} from '../transloco-testing.module';

describe('EnterComponent', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AppModule, getTranslocoModule()],
    });
  });

  let component: EnterComponent;
  let fixture: ComponentFixture<EnterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EnterComponent]
    });
    fixture = TestBed.createComponent(EnterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
