import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VarshanComponent } from './varshan.component';

describe('VarshanComponent', () => {
  let component: VarshanComponent;
  let fixture: ComponentFixture<VarshanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VarshanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VarshanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
