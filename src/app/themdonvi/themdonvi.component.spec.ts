import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemdonviComponent } from './themdonvi.component';

describe('ThemdonviComponent', () => {
  let component: ThemdonviComponent;
  let fixture: ComponentFixture<ThemdonviComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThemdonviComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThemdonviComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
