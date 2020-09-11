import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRssComponent } from './add-rss.component';

describe('AddRssComponent', () => {
  let component: AddRssComponent;
  let fixture: ComponentFixture<AddRssComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddRssComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddRssComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});
