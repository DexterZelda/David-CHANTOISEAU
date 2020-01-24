import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnpokemonComponent } from './unpokemon.component';

describe('UnpokemonComponent', () => {
  let component: UnpokemonComponent;
  let fixture: ComponentFixture<UnpokemonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnpokemonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnpokemonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
