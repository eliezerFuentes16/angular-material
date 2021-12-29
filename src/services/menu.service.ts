import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor(private http: HttpClient) { 
    getMenu():observable{MenuService}{

      this.http.get("./assets/data/menu.json")
    }



  }
}
