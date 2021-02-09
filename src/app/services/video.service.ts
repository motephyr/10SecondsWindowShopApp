import {Injectable} from '@angular/core';
import {MediaCapture, MediaFile, CaptureError, CaptureVideoOptions} from '@ionic-native/media-capture/ngx';


@Injectable({
  providedIn: 'root'
})
export class VideoService {
  files = [];


  constructor(private mediaCapture: MediaCapture
  ) {}



  copyFileToLocalDir(fullPath) {
    let myPath = fullPath;
    // Make sure we copy from the right location
    if (fullPath.indexOf('file://') < 0) {
      myPath = 'file://' + fullPath;
    }

    console.log('myPath');
    console.log(myPath);


  }


  public async addNewToGallery() {
    let options: CaptureVideoOptions = {limit: 1, duration: 10}
    this.mediaCapture.captureVideo(options)
      .then(
        (data: MediaFile[]) => {
          if (data.length > 0) {
            this.copyFileToLocalDir(data[0].fullPath);
          }
        },
        (err: CaptureError) => {
          console.log('err')
          console.error(err)
        }
      );
  }
}
