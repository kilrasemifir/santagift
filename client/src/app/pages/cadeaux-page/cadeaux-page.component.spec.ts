import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadeauxPageComponent } from './cadeaux-page.component';

describe('CadeauxPageComponent', () => {
  let component: CadeauxPageComponent;
  let fixture: ComponentFixture<CadeauxPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadeauxPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CadeauxPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
