import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let debugElement: DebugElement;
  let htmlElement: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();  //变化

    debugElement = fixture.debugElement.query(By.css('p'));
    htmlElement = debugElement.nativeElement;
  });

  it('should display the current number of the counter', () => {
    expect(htmlElement.textContent).toEqual('Number: 1');
  });

  it('should increase the number by one', () => {
    const initialValue = component.count;
    component.increaseCount();

    fixture.detectChanges();  //变化

    const newValue = component.count;
    expect(newValue).toBeGreaterThan(initialValue);
  });


});
