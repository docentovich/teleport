import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeleportComponent } from './teleport.component';

describe('TeleportComponent', () => {
  let component: TeleportComponent;
  let fixture: ComponentFixture<TeleportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeleportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeleportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
