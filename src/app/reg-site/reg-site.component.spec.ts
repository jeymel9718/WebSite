import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegSiteComponent } from './reg-site.component';

describe('RegSiteComponent', () => {
  let component: RegSiteComponent;
  let fixture: ComponentFixture<RegSiteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegSiteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegSiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
