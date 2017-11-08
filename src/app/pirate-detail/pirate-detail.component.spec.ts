import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PirateDetailComponent } from './pirate-detail.component';

describe('PirateDetailComponent', () => {
  let component: PirateDetailComponent;
  let fixture: ComponentFixture<PirateDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PirateDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PirateDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
