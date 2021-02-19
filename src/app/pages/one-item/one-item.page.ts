import {Component, OnInit} from '@angular/core';
import {ItemServie} from 'src/app/services/item.service';

@Component({
  selector: 'app-one-item',
  templateUrl: './one-item.page.html',
  styleUrls: ['./one-item.page.scss'],
})
export class OneItemPage implements OnInit {
  item = null
  constructor(private itemService: ItemServie) {
  }

  ngOnInit() {
    this.fetchItem()
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
    this.itemService.getItem(this.item.id, 'next').subscribe(
      (data) => {
        this.item = data.item
      }
    )
  };

  prev() {
    this.itemService.getItem(this.item.id, 'prev').subscribe(
      (data) => {
        this.item = data.item
      }
    )
  };
}
