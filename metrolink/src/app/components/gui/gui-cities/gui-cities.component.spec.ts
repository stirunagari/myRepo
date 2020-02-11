import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GuiCitiesComponent } from './gui-cities.component';

describe('GuiCitiesComponent', () => {
  let component: GuiCitiesComponent;
  let fixture: ComponentFixture<GuiCitiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuiCitiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuiCitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
