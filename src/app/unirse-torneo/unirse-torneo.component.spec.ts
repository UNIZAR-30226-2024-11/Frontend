import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnirseTorneoComponent } from './unirse-torneo.component';

describe('UnirseTorneoComponent', () => {
  let component: UnirseTorneoComponent;
  let fixture: ComponentFixture<UnirseTorneoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UnirseTorneoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UnirseTorneoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
