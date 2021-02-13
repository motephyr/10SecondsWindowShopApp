import { Injectable } from '@angular/core';
import { MediaCapture, MediaFile, CaptureError, CaptureVideoOptions } from '@ionic-native/media-capture/ngx';
import { HttpClient } from '@angular/common/http';
import { Capacitor } from '@capacitor/core';

import { File } from '@ionic-native/file/ngx';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class VideoService {
  files = [];


  constructor(private mediaCapture: MediaCapture, private http: HttpClient) {}

  handleError(error) {
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
  }

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
    let options = { headers: headers }
    let url: any = 'https://windowshop.leanstep.net/v1/items';
    let a = this.http.post(url, formData, options).pipe(
      catchError(this.handleError)
    )
    a.subscribe((data) => {
      console.log('data');
      console.log(data);
    })
    console.log('end')
  }


  public async addNewToGallery() {
    let options: CaptureVideoOptions = { limit: 1, duration: 10, quality:100 }
    await this.mediaCapture.captureVideo(options)
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
