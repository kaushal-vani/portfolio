import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GlobalNavComponent } from './global-nav.component';

describe('GlobalNavComponent', () => {
  let component: GlobalNavComponent;
  let fixture: ComponentFixture<GlobalNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GlobalNavComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GlobalNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
