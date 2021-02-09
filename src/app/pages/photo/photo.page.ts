import { Component, OnInit } from '@angular/core';
import {VideoService} from '../../services/video.service';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.page.html',
  styleUrls: ['./photo.page.scss'],
})
export class PhotoPage implements OnInit {

  constructor( public videoService: VideoService) {}

  addPhotoToGallery() {
    this.videoService.addNewToGallery();
  }
  ngOnInit() {
  }

}