import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImgCorComponent } from './img-cor.component';

describe('ImgCorComponent', () => {
  let component: ImgCorComponent;
  let fixture: ComponentFixture<ImgCorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImgCorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImgCorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
