import { Component } from "@angular/core";
import { User } from "./models/user";


@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {

  
  
  title = "USER DETAILS";
  user = new User();

  

  isBold: boolean = true;
  fontSize: number = 30;
  isItalic: boolean = true;

  applyBoldClass: boolean = true;
  applyItalicsClass: boolean = true;

  applyClasses() {
    let classes = {
      boldClass: this.applyBoldClass,
      italicsClass: this.applyItalicsClass
    };

    return classes;
  }

  inpvalue: number = 3;    

  MyStyle() {
    let styles = {
      'font-weight': this.isBold ? 'bold' : 'normal',
      'font-style': this.isItalic ? 'italic' : 'normal',
      'font-size.px': this.fontSize
    };
    return styles;
   }


}
