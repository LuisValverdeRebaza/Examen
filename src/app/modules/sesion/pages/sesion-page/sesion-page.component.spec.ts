import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SesionPageComponent } from './sesion-page.component';

describe('SesionPageComponent', () => {
  let component: SesionPageComponent;
  let fixture: ComponentFixture<SesionPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SesionPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SesionPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
