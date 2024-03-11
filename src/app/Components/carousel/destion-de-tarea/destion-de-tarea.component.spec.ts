import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DestionDeTareaComponent } from './destion-de-tarea.component';

describe('DestionDeTareaComponent', () => {
  let component: DestionDeTareaComponent;
  let fixture: ComponentFixture<DestionDeTareaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DestionDeTareaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DestionDeTareaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
