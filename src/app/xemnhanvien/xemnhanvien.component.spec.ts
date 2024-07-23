import { ComponentFixture, TestBed } from '@angular/core/testing';

import { XemnhanvienComponent } from './xemnhanvien.component';

describe('XemnhanvienComponent', () => {
  let component: XemnhanvienComponent;
  let fixture: ComponentFixture<XemnhanvienComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ XemnhanvienComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(XemnhanvienComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
