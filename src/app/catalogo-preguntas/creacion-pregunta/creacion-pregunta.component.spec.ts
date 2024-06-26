import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreacionPreguntaComponent } from './creacion-pregunta.component';

describe('CreacionPreguntaComponent', () => {
  let component: CreacionPreguntaComponent;
  let fixture: ComponentFixture<CreacionPreguntaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreacionPreguntaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreacionPreguntaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
