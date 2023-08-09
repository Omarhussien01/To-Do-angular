import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
 userImage:string = "https://robohash.org/zucker-ping.png";
 userName:string = "magdy"
 loginState:boolean=false

constructor(){

}
  logout(){}
}



