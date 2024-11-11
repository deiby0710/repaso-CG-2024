import { Component } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';

@Component({
  selector: 'app-form2-agent',
  standalone: true,
  imports: [InputIconModule, InputTextModule, IconFieldModule],
  templateUrl: './form2-agent.component.html',
  styleUrl: './form2-agent.component.css'
})
export class Form2AgentComponent {

}
