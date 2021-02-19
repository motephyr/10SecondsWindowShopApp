import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from 'rxjs';

@Injectable()
export class ItemServie {
  constructor(private http: HttpClient) {

  }

  getItems(): Observable<any> {
    return this.http.get("/v1/items");
  }

  getItem(id: String, state = 'next'): Observable<any> {
    return this.http.get(`/v1/items/${id}?${state}=true`);
  }

  getMyitems(): Observable<any> {
    return this.http.get("/v1/items/myitems");
  }

  updateItem(id, status): Observable<any> {
    return this.http.patch(`/v1/items/${id}`,
      {
        "status": status,
      })
  }

  deleteItem(id): Observable<any> {
    return this.http.delete(`/v1/items/${id}`)
  }
}
