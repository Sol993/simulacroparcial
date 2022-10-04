import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadopeliculaComponent } from './listadopelicula.component';

describe('ListadopeliculaComponent', () => {
  let component: ListadopeliculaComponent;
  let fixture: ComponentFixture<ListadopeliculaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListadopeliculaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListadopeliculaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
