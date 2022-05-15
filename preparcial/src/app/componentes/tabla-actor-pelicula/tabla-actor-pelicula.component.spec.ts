import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaActorPeliculaComponent } from './tabla-actor-pelicula.component';

describe('TablaActorPeliculaComponent', () => {
  let component: TablaActorPeliculaComponent;
  let fixture: ComponentFixture<TablaActorPeliculaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablaActorPeliculaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TablaActorPeliculaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
