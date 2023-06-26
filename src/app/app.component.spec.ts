import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import {AppModule} from './app.module';
import {getTranslocoModule} from './transloco-testing.module';

describe('AppComponent', () => {

  beforeEach(() => TestBed.configureTestingModule({
    imports: [RouterTestingModule, AppModule, getTranslocoModule()],
    declarations: [AppComponent]
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'RoomexSPA'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('roomex-spa');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('span:first-child')?.textContent).toContain('Roomex');
  });
});
