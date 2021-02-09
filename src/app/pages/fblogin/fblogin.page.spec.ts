import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FbloginPage } from './fblogin.page';

describe('FbloginPage', () => {
  let component: FbloginPage;
  let fixture: ComponentFixture<FbloginPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FbloginPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FbloginPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
