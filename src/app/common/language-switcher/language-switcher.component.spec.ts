import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LanguageSwitcherComponent } from './language-switcher.component';
import {AppModule} from '../../app.module';
import {getTranslocoModule} from '../../transloco-testing.module';

describe('LanguageSwitcherComponent', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AppModule, getTranslocoModule()],
    });
  });

  let component: LanguageSwitcherComponent;
  let fixture: ComponentFixture<LanguageSwitcherComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LanguageSwitcherComponent]
    });
    fixture = TestBed.createComponent(LanguageSwitcherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
