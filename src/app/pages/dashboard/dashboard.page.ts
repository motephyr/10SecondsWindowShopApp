import {Component, OnInit} from "@angular/core";
import {AuthService} from "../../auth/auth.service";
import {ItemServie} from "../../services/item.service";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.page.html",
  styleUrls: ["./dashboard.page.scss"],
})
export class DashboardPage implements OnInit {
  items: any;
  constructor(private authService: AuthService,
    private itemService: ItemServie) {}

  ngOnInit() {
    this.fetchItems();
  }

  fetchItems() {
    this.authService.getUser().subscribe((data) => {
      this.itemService.getMyitems().subscribe(
        (data) => {
          this.items = data.items.reverse();
        }
      )
    });
  }
  updateItem(id, status) {
    this.itemService.updateItem(id, status).subscribe(
      (data) => {
        this.items = this.items.reduce((sum, x) => {
          return x.id !== data.item.id ? sum.concat(x) : sum.concat(data.item)
        },[])
      }
    )
  }
  deleteItem(id) {
    this.itemService.deleteItem(id).subscribe(
      (data) => {
        this.items = this.items.filter((x) => {
          return x.id !== data.item.id
        })
      }
    )
  }
}
