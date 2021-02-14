import {Injectable} from '@angular/core';
import {MediaCapture, MediaFile, CaptureError, CaptureImageOptions} from '@ionic-native/media-capture/ngx';
import {HttpClient} from '@angular/common/http';
import {Capacitor} from '@capacitor/core';

import {throwError} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VideoService {
  files = [];

  constructor(private mediaCapture: MediaCapture, private http: HttpClient) {}

  async copyFileToLocalDir(data) {
    const blob = await fetch(
      Capacitor.convertFileSrc(data.fullPath)
    ).then(r => r.blob());
    const formData = new FormData();
    formData.append('title', 'test');
    formData.append('price', '100');
    formData.append('email', 'motephyr@gmail.com');
    formData.append('video_file', blob, data.name);

    const headers = {
      'enctype': 'multipart/form-data',
      'Accept': 'plain/text'
    };
    let options = {headers: headers}
    this.http.post('/v1/items', formData, options).subscribe((data) => {
      console.log('data');
      console.log(data);
    }, (error) => {
      let errorMessage = '';
      if (error.error instanceof ErrorEvent) {
        // client-side error
        errorMessage = `Error: ${error.error.message}`;
      } else {
        // server-side error
        errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}\n${error.error}`;
      }
      console.log(errorMessage);
      return throwError(errorMessage);
    })
  }


  public async addNewToGallery() {
    let options: CaptureImageOptions = {limit: 1}
    await this.mediaCapture.captureImage(options)
      .then(
        async (data: MediaFile[]) => {
          if (data.length > 0) {
            await this.copyFileToLocalDir(data[0]);
          }
        },
        (err: CaptureError) => {
          console.log('err')
          console.error(err)
        }
      );
  }
}
