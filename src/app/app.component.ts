import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'roomex-spa';
  menuOpen = false;

  constructor(private router: Router) {

  }

  navigate(e: Event, to: string) {
    e.preventDefault();
    this.router.navigateByUrl(`/${to}`);
    this.menuOpen = false;
  }
}
