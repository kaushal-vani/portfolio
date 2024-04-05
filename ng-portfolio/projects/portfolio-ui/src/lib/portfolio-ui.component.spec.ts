import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioUiComponent } from './portfolio-ui.component';

describe('PortfolioUiComponent', () => {
  let component: PortfolioUiComponent;
  let fixture: ComponentFixture<PortfolioUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PortfolioUiComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PortfolioUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
