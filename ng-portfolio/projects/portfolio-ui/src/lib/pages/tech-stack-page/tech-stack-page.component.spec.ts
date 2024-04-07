import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechStackPageComponent } from './tech-stack-page.component';

describe('TechStackPageComponent', () => {
  let component: TechStackPageComponent;
  let fixture: ComponentFixture<TechStackPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TechStackPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TechStackPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
