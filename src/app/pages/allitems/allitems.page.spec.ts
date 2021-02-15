import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AllitemsPage } from './allitems.page';

describe('AllitemsPage', () => {
  let component: AllitemsPage;
  let fixture: ComponentFixture<AllitemsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllitemsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AllitemsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
