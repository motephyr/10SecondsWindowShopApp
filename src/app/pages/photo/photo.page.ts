import {Component, OnInit, ViewChild, ElementRef} from '@angular/core';
import {VideoService} from '../../services/video.service';
import {isPlatform} from '@ionic/angular';
import {Plugins, CameraResultType, CameraSource} from '@capacitor/core';
import {ActionSheetController} from '@ionic/angular';
const {Camera} = Plugins;


@Component({
  selector: 'app-photo',
  templateUrl: './photo.page.html',
  styleUrls: ['./photo.page.scss'],
})
export class PhotoPage implements OnInit {
  isPlatform = isPlatform
  title: ''
  price: ''
  @ViewChild('fileInput', {static: false}) fileInput: ElementRef;

  constructor(public videoService: VideoService, private actionSheetCtrl: ActionSheetController) {}

  addPhotoToGallery() {
    this.videoService.addNewToGallery(this.title, this.price);
  }
  ngOnInit() {
  }

  uploadFile(event) {
    const eventObj: MSInputMethodContext = event as MSInputMethodContext;
    const target: HTMLInputElement = eventObj.target as HTMLInputElement;
    const file: File = target.files[0];

    this.videoService.addFileToGallery(this.title, this.price, file);
  }

  async selectImageSource() {
    const buttons = [
    ];

    // Only allow file selection inside a browser
    if (isPlatform('desktop')) {
      buttons.push({
        text: 'Choose a File',
        icon: 'attach',
        handler: () => {
          this.fileInput.nativeElement.click();
        }
      });
    }

    const actionSheet = await this.actionSheetCtrl.create({
      header: 'Select Image Source',
      buttons
    });
    await actionSheet.present();
  }

}
