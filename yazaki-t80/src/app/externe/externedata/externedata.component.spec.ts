import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExternedataComponent } from './externedata.component';

describe('ExternedataComponent', () => {
  let component: ExternedataComponent;
  let fixture: ComponentFixture<ExternedataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExternedataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExternedataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
