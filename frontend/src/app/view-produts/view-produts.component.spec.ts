import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewProdutsComponent } from './view-produts.component';

describe('ViewProdutsComponent', () => {
  let component: ViewProdutsComponent;
  let fixture: ComponentFixture<ViewProdutsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewProdutsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewProdutsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
