import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoTeleportComponent } from './do-teleport.component';

describe('TeleportComponent', () => {
  let component: DoTeleportComponent;
  let fixture: ComponentFixture<DoTeleportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoTeleportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoTeleportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
