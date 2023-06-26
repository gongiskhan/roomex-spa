import {Component, OnInit} from '@angular/core';
import {userSelector, UserState} from '../state/user.reducer';
import {UntypedFormBuilder} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {Store} from '@ngrx/store';
import {User} from '../models/user';

@Component({
  selector: 'app-thanks',
  templateUrl: './thanks.component.html',
  styleUrls: ['./thanks.component.scss']
})
export class ThanksComponent implements OnInit {

  user$ = this.store.select(userSelector);
  user: User = {} as User;

  constructor(private store: Store<UserState>) {}

  ngOnInit(): void {
    this.user$.subscribe(u => this.user = u);
  }
}
