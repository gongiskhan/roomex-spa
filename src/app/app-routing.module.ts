import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {WelcomeComponent} from './welcome/welcome.component';
import {EnterComponent} from './enter/enter.component';
import {ThanksComponent} from './thanks/thanks.component';
import {TranslocoModule} from '@ngneat/transloco';
import {TranslocoRootModule} from './transloco-root.module';

const routes: Routes = [
  {
    path: '',
    component: WelcomeComponent
  },
  {
    path: 'welcome',
    component: WelcomeComponent
  },
  {
    path: 'enter',
    component: EnterComponent
  },
  {
    path: 'thanks',
    component: ThanksComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), TranslocoRootModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
