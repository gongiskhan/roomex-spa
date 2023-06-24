import { Component } from '@angular/core';
import {TranslocoService} from '@ngneat/transloco';

@Component({
  selector: 'app-language-switcher',
  templateUrl: './language-switcher.component.html',
  styleUrls: ['./language-switcher.component.scss']
})
export class LanguageSwitcherComponent {

  constructor(private translocoService: TranslocoService) {}

  open = false;
  selectedLanguage = 'en';
  languages = ['en', 'pt'];

  switchLanguage(lang: string) {
    this.selectedLanguage = lang;
    this.open = false;
    this.translocoService.setActiveLang(lang);
  }
}

