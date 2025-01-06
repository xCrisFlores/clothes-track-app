import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClotheFormComponent } from './clothe-form.component';

describe('ClotheFormComponent', () => {
  let component: ClotheFormComponent;
  let fixture: ComponentFixture<ClotheFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClotheFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClotheFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
