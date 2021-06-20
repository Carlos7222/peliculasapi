import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarunoComponent } from './buscaruno.component';

describe('BuscarunoComponent', () => {
  let component: BuscarunoComponent;
  let fixture: ComponentFixture<BuscarunoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuscarunoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuscarunoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
