import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioSharedComponent } from './portfolio-shared.component';

describe('PortfolioSharedComponent', () => {
  let component: PortfolioSharedComponent;
  let fixture: ComponentFixture<PortfolioSharedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PortfolioSharedComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PortfolioSharedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
