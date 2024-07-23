import { ComponentFixture, TestBed } from '@angular/core/testing';

import { XemdanhsachdonviComponent } from './xemdanhsachdonvi.component';

describe('XemdanhsachdonviComponent', () => {
  let component: XemdanhsachdonviComponent;
  let fixture: ComponentFixture<XemdanhsachdonviComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ XemdanhsachdonviComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(XemdanhsachdonviComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
