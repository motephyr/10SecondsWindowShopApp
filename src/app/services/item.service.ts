import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
 
@Injectable()
export class ItemServie {
    constructor(private http:HttpClient){
 
    }
 
    getItems():Observable<any>{
        return this.http.get("/v1/items");
    }

    getMyitems():Observable<any>{
        return this.http.get("/v1/items/myitems");
    }
}
