import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmigosPopupComponent } from './amigos-popup.component';

describe('AmigosPopupComponent', () => {
  let component: AmigosPopupComponent;
  let fixture: ComponentFixture<AmigosPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AmigosPopupComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AmigosPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
