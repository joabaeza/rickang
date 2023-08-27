import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  //templateUrl: './app.component.html',
  templateUrl: './app.componentendos.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //title = 'my-app';
  data : any[] = [];

  constructor(
    private http: HttpClient
  ){}

  ngOninit(){
    this.http.get('https://api.spacexdata.com/v4/rockets')
    //https://rickandmortyapi.com/api/character
    .subscribe((data:any)=>{
      this.data=data;
    })
  }
}
