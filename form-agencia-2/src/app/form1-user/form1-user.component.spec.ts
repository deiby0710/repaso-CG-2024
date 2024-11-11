import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Form1UserComponent } from './form1-user.component';

describe('Form1UserComponent', () => {
  let component: Form1UserComponent;
  let fixture: ComponentFixture<Form1UserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Form1UserComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Form1UserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
