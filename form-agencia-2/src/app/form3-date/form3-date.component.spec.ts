import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Form3DateComponent } from './form3-date.component';

describe('Form3DateComponent', () => {
  let component: Form3DateComponent;
  let fixture: ComponentFixture<Form3DateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Form3DateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Form3DateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
