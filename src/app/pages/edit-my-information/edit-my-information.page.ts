import {HttpClient} from '@angular/common/http';
import {Component, OnInit} from '@angular/core';
import {AlertController} from '@ionic/angular';
import {AuthService} from 'src/app/auth/auth.service';
import {Storage} from '@ionic/storage';
@Component({
  selector: 'app-edit-my-information',
  templateUrl: './edit-my-information.page.html',
  styleUrls: ['./edit-my-information.page.scss'],
})
export class EditMyInformationPage implements OnInit {
  information = ''
  constructor(private authService: AuthService, public alertController: AlertController, private http: HttpClient, private storage: Storage) {}

  ngOnInit() {
    this.getData()
  }
  async save() {
    this.http.post('/v1/users/update', {information: this.information}).subscribe(async (data) => {
            await this.storage.set("USER", JSON.stringify(data['user']));
      this.getData()
      const alert = await this.alertController.create({
        cssClass: 'my-custom-class',
        header: 'Alert',
        subHeader: 'Success',
        buttons: ['OK']
      });

      await alert.present();
    })
  }

  getData() {
    this.authService.getUser().subscribe((data) => {
      this.information = data.information
    });
  }

}
