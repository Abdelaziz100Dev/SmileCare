import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TCPaginationComponent } from './pagination.component';

describe('TCPaginationComponent', () => {
  let component: TCPaginationComponent;
  let fixture: ComponentFixture<TCPaginationComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TCPaginationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TCPaginationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
