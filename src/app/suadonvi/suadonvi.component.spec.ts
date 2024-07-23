import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuadonviComponent } from './suadonvi.component';

describe('SuadonviComponent', () => {
  let component: SuadonviComponent;
  let fixture: ComponentFixture<SuadonviComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuadonviComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SuadonviComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
