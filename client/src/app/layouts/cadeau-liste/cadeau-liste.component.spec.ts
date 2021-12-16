import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadeauListeComponent } from './cadeau-liste.component';

describe('CadeauListeComponent', () => {
  let component: CadeauListeComponent;
  let fixture: ComponentFixture<CadeauListeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadeauListeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CadeauListeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
