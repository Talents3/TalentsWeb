import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutModuleComponent } from './about-module.component';

describe('AboutModuleComponent', () => {
  let component: AboutModuleComponent;
  let fixture: ComponentFixture<AboutModuleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutModuleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
