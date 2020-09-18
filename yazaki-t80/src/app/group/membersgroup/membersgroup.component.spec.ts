import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MembersgroupComponent } from './membersgroup.component';

describe('MembersgroupComponent', () => {
  let component: MembersgroupComponent;
  let fixture: ComponentFixture<MembersgroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MembersgroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MembersgroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
