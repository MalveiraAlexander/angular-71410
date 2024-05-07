import { Component } from '@angular/core';
import { FormGroup, AbstractControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.scss']
})
export class TemplateComponent {

  isFullNameEnable: boolean = true;
  values: any;
  post: Post = new Post();

  send(form: FormGroup) {
    console.log(form);
    this.values = form.value;
  }

  validateEmail(email: AbstractControl, fullName: AbstractControl) {
    if (email.valid && email.value != '' && email.value) {
      this.isFullNameEnable = false;
      fullName.setValidators([Validators.required, Validators.minLength(2), Validators.maxLength(255)])
    } else {
      this.isFullNameEnable = true;
      fullName.setValue(null);
      fullName.clearValidators();
      fullName.updateValueAndValidity();
    }
  }
}

class Post {
  title: string;
  email: string;
  fullName: string;
  description: string;
  isDisabledComment: boolean;
}
