import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StrategyContainerComponent } from './strategy-container.component';

describe('StrategyContainerComponent', () => {
  let component: StrategyContainerComponent;
  let fixture: ComponentFixture<StrategyContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StrategyContainerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StrategyContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
