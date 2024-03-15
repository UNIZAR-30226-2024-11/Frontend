import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnirsePartidaComponent } from './unirse-partida.component';

describe('UnirsePartidaComponent', () => {
  let component: UnirsePartidaComponent;
  let fixture: ComponentFixture<UnirsePartidaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UnirsePartidaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UnirsePartidaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
