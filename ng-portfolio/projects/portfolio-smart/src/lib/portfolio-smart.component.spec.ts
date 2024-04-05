import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioSmartComponent } from './portfolio-smart.component';

describe('PortfolioSmartComponent', () => {
  let component: PortfolioSmartComponent;
  let fixture: ComponentFixture<PortfolioSmartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PortfolioSmartComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PortfolioSmartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
