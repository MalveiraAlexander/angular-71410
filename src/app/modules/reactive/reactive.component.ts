import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.scss']
})
export class ReactiveComponent implements OnInit {


  form: FormGroup;
  values: any;

  constructor() { }

  ngOnInit(): void {
    this.createForm();
  }

  send() {
    console.log(this.form);
    this.values = this.form.value;
  }

  private createForm() {
    this.form = new FormGroup({
      title: new FormControl<string>(null, [Validators.required, Validators.minLength(2), Validators.maxLength(100)]),
      email: new FormControl<string>(null, [Validators.email]),
      fullName: new FormControl<string>(null),
      description: new FormControl<string>(null, [Validators.required, Validators.minLength(3), Validators.maxLength(500)]),
      isDisabledComment: new FormControl<boolean>(false)
    });

    this.form.controls['fullName'].disable();

    this.form.controls['email'].valueChanges.subscribe((value: string) => {
      if (this.form.controls['email'].valid && value != '' && value) {
        this.form.controls['fullName'].enable();
        this.form.controls['fullName'].setValidators([Validators.required, Validators.minLength(2), Validators.maxLength(255)])
      } else {
        this.form.controls['fullName'].disable();
        this.form.controls['fullName'].setValue(null);
        this.form.controls['fullName'].clearValidators();
        this.form.controls['fullName'].updateValueAndValidity();
      }
    })

  }

}
