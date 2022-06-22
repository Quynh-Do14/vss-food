import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeedbackListComponent } from './feedback-list/feedback-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {FeedbackRoutingModule} from './feedback.routing.module';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from 'src/app/material/material.module';


@NgModule({
  declarations: [
    FeedbackListComponent
  ],
  imports: [
    CommonModule,
    FeedbackRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    HttpClientModule 
  ]
})
export class FeedbackModule { }
