import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalogoArticulosComponent } from './catalogo-articulos.component';

describe('CatalogoArticulosComponent', () => {
  let component: CatalogoArticulosComponent;
  let fixture: ComponentFixture<CatalogoArticulosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CatalogoArticulosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CatalogoArticulosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
