import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BookAPIPage } from './book-api.page';

describe('BookAPIPage', () => {
  let component: BookAPIPage;
  let fixture: ComponentFixture<BookAPIPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(BookAPIPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
