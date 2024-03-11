import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsumoDeAPIComponent } from './consumo-de-api.component';

describe('ConsumoDeAPIComponent', () => {
  let component: ConsumoDeAPIComponent;
  let fixture: ComponentFixture<ConsumoDeAPIComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ConsumoDeAPIComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConsumoDeAPIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
