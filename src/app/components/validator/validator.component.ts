import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Component({
  selector: 'validator',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './validator.component.html',
  styleUrls: ['./validator.component.scss']
})
export class ValidatorComponent {
  @Input({required: true}) control: AbstractControl; // {required: true} solo en angular 16+
  @Input({required: true}) name: string;
}
