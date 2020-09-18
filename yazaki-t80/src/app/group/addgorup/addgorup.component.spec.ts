import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddgorupComponent } from './addgorup.component';

describe('AddgorupComponent', () => {
  let component: AddgorupComponent;
  let fixture: ComponentFixture<AddgorupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddgorupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddgorupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
