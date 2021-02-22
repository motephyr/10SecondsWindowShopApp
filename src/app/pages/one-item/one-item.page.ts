import {Component, OnInit} from '@angular/core';
import {ItemServie} from 'src/app/services/item.service';

@Component({
  selector: 'app-one-item',
  templateUrl: './one-item.page.html',
  styleUrls: ['./one-item.page.scss'],
})
export class OneItemPage implements OnInit {
  item = null
  viewPeriod = 0;
  constructor(private itemService: ItemServie) {
  }

  ngOnInit() {
    this.fetchItem()
    this.counterTimer()
  }

  fetchItem() {
    this.itemService.getItems().subscribe(
      (data) => {
        const items = data.items
        this.item = items[Math.floor(Math.random() * items.length)];
      }
    )
  };

  next() {
    this.itemService.getItem(this.item.id, 'next', this.viewPeriod).subscribe(
      (data) => {
        this.viewPeriod = 0
        this.item = data.item
      }
    )
  };

  prev() {
    this.itemService.getItem(this.item.id, 'prev', this.viewPeriod).subscribe(
      (data) => {
        this.viewPeriod = 0
        this.item = data.item
      }
    )
  };

  counterTimer(){
    setInterval(() => {
       this.viewPeriod = this.viewPeriod + 1
    }, 1000)
  }
}
