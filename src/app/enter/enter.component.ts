import {Component, OnInit} from '@angular/core';
import {UntypedFormBuilder, UntypedFormGroup, Validators} from '@angular/forms';
import {BehaviorSubject} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {MatAutocompleteSelectedEvent} from '@angular/material/autocomplete';
import {Router} from '@angular/router';

@Component({
  selector: 'app-enter',
  templateUrl: './enter.component.html',
  styleUrls: ['./enter.component.scss']
})
export class EnterComponent implements OnInit {

  form: UntypedFormGroup = this.newForm();
  // @ts-ignore
  filteredMovies: BehaviorSubject<Array<any>> = new BehaviorSubject<Array<any>>();

  constructor(private formBuilder: UntypedFormBuilder,
              private httpClient: HttpClient,
              private router: Router
  ) {}

  ngOnInit(): void {
    this.form?.get('country')?.valueChanges.subscribe(value => {
      if (value === 'uk') {
        this.form.controls['postCode'].setValidators([Validators.required, Validators.pattern(/^[A-Za-z]{1,2}[0-9Rr][0-9A-Za-z]? [0-9][ABD-HJLNP-UW-Zabd-hjlnp-uw-z]{2}$/)])
      } else {
        this.form.controls['postCode'].setValidators([Validators.pattern(/^(\s*|\d{6,10})$/)])
      }
      this.form.controls['postCode'].updateValueAndValidity();
    });

    this.form.controls['favoriteMovie'].valueChanges.subscribe(async value => {
      if (value && value.length > 2) {
        const movies: any = await this.httpClient.get(`https://www.omdbapi.com/?apikey=83513884&type=movie&s=${value}`).toPromise();
        if (movies && movies.Search && movies.Search.length) {
          this.filteredMovies.next(movies.Search.map((movie: any) => movie.Title));
        } else {
          this.filteredMovies.next([]);
        }
      } else {
        this.filteredMovies.next([]);
      }
    });
  }

  newForm() {
    return this.formBuilder.group({
      name: ['', [Validators.required, Validators.pattern(/^([^0-9]*)$/)]],
      username: ['', [Validators.email]],
      country: ['', [Validators.required]],
      postCode: [''],
      favoriteMovie: ['', [Validators.required]]
    });
  }

  selectMovie(e: MatAutocompleteSelectedEvent) {
    this.form.controls['favoriteMovie'].setValue(e.option.viewValue);
  }

  submit() {
    if (this.form.valid) {
      this.router.navigateByUrl('/thanks');
    }
  }
}
