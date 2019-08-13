import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VsphereclusterComponent } from './vspherecluster.component';

describe('VsphereclusterComponent', () => {
  let component: VsphereclusterComponent;
  let fixture: ComponentFixture<VsphereclusterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VsphereclusterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VsphereclusterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
