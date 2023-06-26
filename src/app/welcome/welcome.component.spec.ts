import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WelcomeComponent } from './welcome.component';
import {AppModule} from '../app.module';
import {getTranslocoModule} from '../transloco-testing.module';

describe('WelcomeComponent', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AppModule, getTranslocoModule()],
    });
  });

  let component: WelcomeComponent;
  let fixture: ComponentFixture<WelcomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WelcomeComponent]
    });
    fixture = TestBed.createComponent(WelcomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have <p> with "Your favorite app for storing your favorite movies."', () => {
    const bannerElement: HTMLElement = fixture.nativeElement;
    const p = bannerElement.querySelectorAll('p')[0];
    console.log('p.textContent', p.textContent);
    expect(p.textContent).toEqual('Your favorite app for storing your favorite movies.');
  });
});
