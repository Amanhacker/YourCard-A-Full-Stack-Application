import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PagenotfoundexceptionComponent } from './pagenotfoundexception.component';

describe('PagenotfoundexceptionComponent', () => {
  let component: PagenotfoundexceptionComponent;
  let fixture: ComponentFixture<PagenotfoundexceptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PagenotfoundexceptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PagenotfoundexceptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
