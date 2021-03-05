import {Component, OnInit} from '@angular/core';
import {ItemServie} from 'src/app/services/item.service';
import {AlertController} from '@ionic/angular';
@Component({
  selector: 'app-one-item',
  templateUrl: './one-item.page.html',
  styleUrls: ['./one-item.page.scss'],
})
export class OneItemPage implements OnInit {
  item = null
  viewPeriod = 0;
  loading = false
  constructor(private itemService: ItemServie, public alertController: AlertController) {
  }

  ngOnInit() {
    this.fetchItem()
    this.counterTimer()
  }

  fetchItem() {
    this.loading = true
    this.itemService.getItems('').subscribe(
      (data) => {
        const items = data.items
        this.item = items[Math.floor(Math.random() * items.length)];
        this.loading = false
      }
    )
  };

  next() {
    this.loading = true
    this.itemService.getItem(this.item.id, 'next', this.viewPeriod).subscribe(
      (data) => {
        this.viewPeriod = 0
        this.item = data.item
        this.loading = false
      }
    )
  };

  prev() {
    this.loading = true
    this.itemService.getItem(this.item.id, 'prev', this.viewPeriod).subscribe(
      (data) => {
        this.viewPeriod = 0
        this.item = data.item
        this.loading = false
      }
    )
  };

  counterTimer() {
    setInterval(() => {
      this.viewPeriod = this.viewPeriod + 1
    }, 1000)
  }

  checkout() {
    this.itemService.checkout(this.item.id).subscribe(
      async (data) => {
        const alert = await this.alertController.create({
          cssClass: 'my-custom-class',
          header: 'Check seller information',
          message: data.seller.information,
          buttons: ['OK']
        });

        await alert.present();
      }
    )
  }
}
