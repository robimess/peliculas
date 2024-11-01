import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ComediaPage } from './comedia.page';

describe('ComediaPage', () => {
  let component: ComediaPage;
  let fixture: ComponentFixture<ComediaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ComediaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
