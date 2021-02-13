import { Component, OnInit } from "@angular/core";
import { AuthService } from "../../auth/auth.service";
import { ItemServie } from "../../services/item.service";
 
@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.page.html",
  styleUrls: ["./dashboard.page.scss"],
})
export class DashboardPage implements OnInit {
  userName = "";
  items:any;
  constructor(private authService: AuthService,
    private itemService:ItemServie) {}
 
  ngOnInit() {
    this.fetchItems();
  }
 
  fetchItems(){
    this.itemService.getItems().subscribe(
      (data) => {
         this.items = data.items;
      },
      (error) => {
        console.log(JSON.stringify(error))
        alert('failed fetch items')
      }
    )
  }
}
