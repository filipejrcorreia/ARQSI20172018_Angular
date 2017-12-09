import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApresentacaoMedicamentosComponent } from './apresentacao-medicamentos.component';

describe('ApresentacaoMedicamentosComponent', () => {
  let component: ApresentacaoMedicamentosComponent;
  let fixture: ComponentFixture<ApresentacaoMedicamentosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApresentacaoMedicamentosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApresentacaoMedicamentosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
