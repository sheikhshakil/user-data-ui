import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDeletorComponent } from './user-deletor.component';

describe('UserDeletorComponent', () => {
  let component: UserDeletorComponent;
  let fixture: ComponentFixture<UserDeletorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserDeletorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserDeletorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
