import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAddedElementComponent } from './dialog-added-element.component';

describe('DialogAddedElementComponent', () => {
  let component: DialogAddedElementComponent;
  let fixture: ComponentFixture<DialogAddedElementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogAddedElementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogAddedElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
