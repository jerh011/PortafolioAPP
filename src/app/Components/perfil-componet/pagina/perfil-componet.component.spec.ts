import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilComponetComponent } from './perfil-componet.component';

describe('PerfilComponetComponent', () => {
  let component: PerfilComponetComponent;
  let fixture: ComponentFixture<PerfilComponetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PerfilComponetComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PerfilComponetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
