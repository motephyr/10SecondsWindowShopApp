import {Component, OnInit} from '@angular/core';
import {ItemServie} from "../../services/item.service";

@Component({
  selector: 'app-allitems',
  templateUrl: './allitems.page.html',
  styleUrls: ['./allitems.page.scss'],
})
export class AllitemsPage implements OnInit {
  items: any;
  constructor(
    private itemService: ItemServie) {}

  ngOnInit() {
    this.fetchItems();
  }

  fetchItems() {
    this.itemService.getItems('isBuyerPage').subscribe(
      (data) => {
        this.items = data.items.reverse();
      }
    )
  };

}
