import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatProdutsComponent } from './creat-produts.component';

describe('CreatProdutsComponent', () => {
  let component: CreatProdutsComponent;
  let fixture: ComponentFixture<CreatProdutsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatProdutsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreatProdutsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
