
import { Component} from '@angular/core';
import {HttpClient} from '@angular/common/http'; //HTTP CLIENT
import { Observable } from 'rxjs/internal/Observable';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 title = 'client';
    results: string[];
    obs:Observable<object>;
    // Inject HttpClient into your component or service.
    constructor(private http: HttpClient) {}

    ngOnInit(): void {
      // Make the HTTP request:
    }

    event():void{
      this.obs = this.http.get('https://3000-c2da1564-900e-49c8-8f69-67064ebc7509.ws-eu01.gitpod.io/api/products');
      this.obs.subscribe(this.getData);
    }
    getData = data => {
        this.results = data['products'];
      }
}
