import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TargetaPokemonComponent } from './targeta-pokemon.component';

describe('TargetaPokemonComponent', () => {
  let component: TargetaPokemonComponent;
  let fixture: ComponentFixture<TargetaPokemonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TargetaPokemonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TargetaPokemonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
