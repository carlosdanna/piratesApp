import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PirateSearchComponent } from './pirate-search.component';

describe('PirateSearchComponent', () => {
  let component: PirateSearchComponent;
  let fixture: ComponentFixture<PirateSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PirateSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PirateSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
