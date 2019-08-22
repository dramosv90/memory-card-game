import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConffettiComponent } from './conffetti.component';

describe('ConffettiComponent', () => {
  let component: ConffettiComponent;
  let fixture: ComponentFixture<ConffettiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConffettiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConffettiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
