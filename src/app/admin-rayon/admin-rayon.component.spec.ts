import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminRayonComponent } from './admin-rayon.component';

describe('AdminRayonComponent', () => {
  let component: AdminRayonComponent;
  let fixture: ComponentFixture<AdminRayonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminRayonComponent]
    });
    fixture = TestBed.createComponent(AdminRayonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
