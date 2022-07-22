import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListProdutsComponent } from './list-produts.component';

describe('ListProdutsComponent', () => {
  let component: ListProdutsComponent;
  let fixture: ComponentFixture<ListProdutsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListProdutsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListProdutsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
