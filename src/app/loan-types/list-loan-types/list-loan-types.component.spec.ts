import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListLoanTypesComponent } from './list-loan-types.component';

describe('ListLoanTypesComponent', () => {
  let component: ListLoanTypesComponent;
  let fixture: ComponentFixture<ListLoanTypesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListLoanTypesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListLoanTypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
