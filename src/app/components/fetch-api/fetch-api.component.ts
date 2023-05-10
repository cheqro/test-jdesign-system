import { Component , OnInit} from '@angular/core';
import {map} from "rxjs/operators";
import {FetchApiService} from "../../services/fetch-api.service";
import {BehaviorSubject} from "rxjs";

@Component({
  selector: 'app-fetch-api',
  templateUrl: './fetch-api.component.html',
  styleUrls: ['./fetch-api.component.scss']
})
export class FetchApiComponent implements OnInit{
  constructor(private fetchApiService: FetchApiService) {}
  subject : BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false)


  ngOnInit(){
    this.subject.subscribe(x=>console.log('value (BehaviorSubject) has been changed to ', x))
    this.fetchApiService.getPosts().pipe(map(arr=>arr.filter(ele=>Number(ele.id)>=30))).subscribe(console.log)
  }

  changeMe() {
    this.subject.next(true);
  }
}
