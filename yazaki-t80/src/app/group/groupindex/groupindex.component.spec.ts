import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupindexComponent } from './groupindex.component';

describe('GroupindexComponent', () => {
  let component: GroupindexComponent;
  let fixture: ComponentFixture<GroupindexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroupindexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupindexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
