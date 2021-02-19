import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OneItemPage } from './one-item.page';

describe('OneItemPage', () => {
  let component: OneItemPage;
  let fixture: ComponentFixture<OneItemPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OneItemPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OneItemPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
