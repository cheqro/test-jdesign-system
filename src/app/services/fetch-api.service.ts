import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
interface Post {
  userId: string,
  id: string,
  title: string,
  body: string
}
@Injectable({
  providedIn: 'root'
})
export class FetchApiService {
  url = "https://jsonplaceholder.typicode.com/posts";

  constructor(private http: HttpClient
  ) { }

  getPosts(): Observable<Post[]>{
 return this.http.get<Post[]>(this.url);
  }
}
