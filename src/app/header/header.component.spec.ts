import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';



describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderComponent ],
      imports: [RouterTestingModule,FormsModule]
    })
    .compileComponents();
  }));

  /**
   * before each test the component should try to be generated so it can be tested
   */
  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
/**
 * the component should have been made
 */
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
