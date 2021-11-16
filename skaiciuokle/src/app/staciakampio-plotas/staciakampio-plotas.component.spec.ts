import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaciakampioPlotasComponent } from './staciakampio-plotas.component';

describe('StaciakampioPlotasComponent', () => {
  let component: StaciakampioPlotasComponent;
  let fixture: ComponentFixture<StaciakampioPlotasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StaciakampioPlotasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StaciakampioPlotasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
