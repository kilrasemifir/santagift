import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadeauxCardComponent } from './cadeaux-card.component';

describe('CadeauxCardComponent', () => {
  let component: CadeauxCardComponent;
  let fixture: ComponentFixture<CadeauxCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadeauxCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CadeauxCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
