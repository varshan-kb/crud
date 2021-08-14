import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrakshComponent } from './praksh.component';

describe('PrakshComponent', () => {
  let component: PrakshComponent;
  let fixture: ComponentFixture<PrakshComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrakshComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrakshComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
