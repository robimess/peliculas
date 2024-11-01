import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ClasicosPage } from './clasicos.page';

describe('ClasicosPage', () => {
  let component: ClasicosPage;
  let fixture: ComponentFixture<ClasicosPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ClasicosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
