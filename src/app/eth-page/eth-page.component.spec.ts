import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EthPageComponent } from './eth-page.component';

describe('EthPageComponent', () => {
  let component: EthPageComponent;
  let fixture: ComponentFixture<EthPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EthPageComponent]
    });
    fixture = TestBed.createComponent(EthPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
