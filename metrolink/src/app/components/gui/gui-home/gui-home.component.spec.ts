import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GuiHomeComponent } from './gui-home.component';

describe('GuiHomeComponent', () => {
  let component: GuiHomeComponent;
  let fixture: ComponentFixture<GuiHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuiHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuiHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
