import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemplateComponent } from './template.component';
import { TemplateRoutingModule } from './template-routing.module';
import { ValidatorComponent } from 'src/app/components/validator/validator.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    TemplateComponent
  ],
  imports: [
    CommonModule,
    TemplateRoutingModule,
    FormsModule,
    ValidatorComponent
  ]
})
export class TemplateModule { }
