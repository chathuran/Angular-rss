import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RssMainComponent } from './rss-main.component';

describe('RssMainComponent', () => {
  let component: RssMainComponent;
  let fixture: ComponentFixture<RssMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RssMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RssMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});
