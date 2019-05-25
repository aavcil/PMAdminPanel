import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListWaitMessageComponent } from './list-wait-message.component';

describe('ListWaitMessageComponent', () => {
  let component: ListWaitMessageComponent;
  let fixture: ComponentFixture<ListWaitMessageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListWaitMessageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListWaitMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
