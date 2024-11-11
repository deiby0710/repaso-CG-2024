import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Form2AgentComponent } from './form2-agent.component';

describe('Form2AgentComponent', () => {
  let component: Form2AgentComponent;
  let fixture: ComponentFixture<Form2AgentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Form2AgentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Form2AgentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
