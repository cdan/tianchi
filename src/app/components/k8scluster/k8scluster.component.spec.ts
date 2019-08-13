import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { K8sclusterComponent } from './k8scluster.component';

describe('K8sclusterComponent', () => {
  let component: K8sclusterComponent;
  let fixture: ComponentFixture<K8sclusterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ K8sclusterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(K8sclusterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
