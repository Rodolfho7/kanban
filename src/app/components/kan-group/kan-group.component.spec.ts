import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KanGroupComponent } from './kan-group.component';

describe('KanGroupComponent', () => {
  let component: KanGroupComponent;
  let fixture: ComponentFixture<KanGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KanGroupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KanGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
