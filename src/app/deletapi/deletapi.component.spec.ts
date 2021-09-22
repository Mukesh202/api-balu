import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletapiComponent } from './deletapi.component';

describe('DeletapiComponent', () => {
  let component: DeletapiComponent;
  let fixture: ComponentFixture<DeletapiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeletapiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeletapiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
