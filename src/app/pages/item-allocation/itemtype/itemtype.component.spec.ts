import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemtypeComponent } from './itemtype.component';

describe('ItemtypeComponent', () => {
  let component: ItemtypeComponent;
  let fixture: ComponentFixture<ItemtypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemtypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemtypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
