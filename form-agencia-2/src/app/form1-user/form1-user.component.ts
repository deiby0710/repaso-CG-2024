import { Component } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';

@Component({
  selector: 'app-form1-user',
  standalone: true,
  imports: [InputTextModule, IconFieldModule, InputIconModule],
  templateUrl: './form1-user.component.html',
  styleUrl: './form1-user.component.css'
})
export class Form1UserComponent {

}
