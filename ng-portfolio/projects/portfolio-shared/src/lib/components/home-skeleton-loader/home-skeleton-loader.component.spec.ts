import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeSkeletonLoaderComponent } from './home-skeleton-loader.component';

describe('HomeSkeletonLoaderComponent', () => {
  let component: HomeSkeletonLoaderComponent;
  let fixture: ComponentFixture<HomeSkeletonLoaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeSkeletonLoaderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HomeSkeletonLoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
