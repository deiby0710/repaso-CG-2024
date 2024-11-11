import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Form1UserComponent } from './form1-user/form1-user.component';
import { Form2AgentComponent } from './form2-agent/form2-agent.component';
import { Form3DateComponent } from './form3-date/form3-date.component';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Form1UserComponent, Form2AgentComponent, Form3DateComponent, CardModule, ButtonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'form-agencia-2';
}
