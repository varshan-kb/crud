import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VikasGlobalComponent } from './vikas-global.component';

describe('VikasGlobalComponent', () => {
  let component: VikasGlobalComponent;
  let fixture: ComponentFixture<VikasGlobalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VikasGlobalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VikasGlobalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
