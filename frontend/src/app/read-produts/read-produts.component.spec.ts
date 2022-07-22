import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadProdutsComponent } from './read-produts.component';

describe('ReadProdutsComponent', () => {
  let component: ReadProdutsComponent;
  let fixture: ComponentFixture<ReadProdutsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReadProdutsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReadProdutsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
