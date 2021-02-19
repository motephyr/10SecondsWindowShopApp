import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EditMyInformationPage } from './edit-my-information.page';

describe('EditMyInformationPage', () => {
  let component: EditMyInformationPage;
  let fixture: ComponentFixture<EditMyInformationPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditMyInformationPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EditMyInformationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
