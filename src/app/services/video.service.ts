import {Injectable} from '@angular/core';
import {MediaCapture, MediaFile, CaptureError, CaptureImageOptions} from '@ionic-native/media-capture/ngx';
import {HttpClient} from '@angular/common/http';
import {Capacitor} from '@capacitor/core';
import {Router} from '@angular/router';
import {isPlatform} from '@ionic/angular';
import {Plugins, CameraResultType} from '@capacitor/core';

@Injectable({
  providedIn: 'root'
})
export class VideoService {
  files = [];

  constructor(private mediaCapture: MediaCapture, private http: HttpClient, private router: Router) {}

  async uploadFile(title, price, data) {
    const blob = await fetch(
      Capacitor.convertFileSrc(data.fullPath)
    ).then(r => r.blob());
    const formData = new FormData();
    formData.append('title', title);
    formData.append('price', price);
    formData.append('video_file', blob, data.name);

    const headers = {
      'enctype': 'multipart/form-data'
    };
    let options = {headers: headers}
    await this.http.post('/v1/items', formData, options).subscribe((data) => {
      console.log('data');
      console.log(data);
    })
    this.router.navigate(['/dashboard'])
  }

  public async addNewToGallery(title, price) {
    let options: CaptureImageOptions = {limit: 1}
    if (!isPlatform('desktop')) {
      await this.mediaCapture.captureImage(options)
        .then(
          async (data: MediaFile[]) => {
            if (data.length > 0) {
              await this.uploadFile(title, price, data[0]);
            }
          },
          (err: CaptureError) => {
            console.log('err')
            console.error(err)
          }
        );
    } else {
      const {Camera} = Plugins;
      const image = await Camera.getPhoto({
        quality: 90,
        allowEditing: true,
        resultType: CameraResultType.Uri
      });
      let imageUrl = image.webPath;
      let imageUrlArr = imageUrl.split('/')
      await this.uploadFile(title, price, {fullPath: imageUrl, name: `${imageUrlArr[imageUrlArr.length - 1]}.${image.format}`});
    }
  }
}
