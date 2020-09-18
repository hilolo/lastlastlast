import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewcostComponent } from './viewcost.component';

describe('ViewcostComponent', () => {
  let component: ViewcostComponent;
  let fixture: ComponentFixture<ViewcostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewcostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewcostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
