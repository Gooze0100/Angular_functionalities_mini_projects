import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KmiCardComponent } from './kmi-card.component';

describe('KmiCardComponent', () => {
  let component: KmiCardComponent;
  let fixture: ComponentFixture<KmiCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KmiCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KmiCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
