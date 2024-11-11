import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CalendarModule } from 'primeng/calendar';
import { InputTextareaModule } from 'primeng/inputtextarea';



@Component({
  selector: 'app-form3-date',
  standalone: true,
  imports: [CalendarModule, InputTextareaModule],
  templateUrl: './form3-date.component.html',
  styleUrl: './form3-date.component.css'
})
export class Form3DateComponent {

}
