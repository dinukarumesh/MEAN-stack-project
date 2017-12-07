import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MiddleTermTermComponent } from './middle-term-term.component';

describe('MiddleTermTermComponent', () => {
  let component: MiddleTermTermComponent;
  let fixture: ComponentFixture<MiddleTermTermComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MiddleTermTermComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MiddleTermTermComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
