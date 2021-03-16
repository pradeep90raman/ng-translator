import { Component } from "@angular/core";

import { UtilityService } from "../utility.service";

@Component({
  selector: "app-converter",
  templateUrl: "./app-converter.component.html",
  styleUrls: ["./app-converter.component.scss"]
})
export class AppConverterComponent {
  inputString: string = "";
  outputString: string = "";

  constructor(private utilityService: UtilityService) {}

  // Function to handle keypad Press events
  numpadClick(num: string, isBackspace?: boolean) {
    console.log("You Typed: ", num);
    // Checking if first char given is #
    if (this.inputString.length == 0 && num == "#") return;

    // Check if consecutive # is given as input
    if (this.utilityService.checkIsNotValid(this.inputString, num)) {
      // this.inputString.length > 0
      //   ? (this.inputString = this.inputString.slice(0, -1))
      //   : (this.inputString = "");
      return;
    }

    // Remove last char from input screen
    if (isBackspace && this.inputString) {
      this.inputString = this.inputString.slice(0, -1);
    } else {
      this.inputString += num;
    }
    
    // Compute only when a valid number is given
    if (num != "#") {
      let arrInput = this.inputString.split("#");
      arrInput = arrInput.filter(val => val);
      if (arrInput.length > 0) {
        this.outputString = "";
        arrInput.forEach(val => {
          this.outputString += this.utilityService.numToAlpha(parseInt(val));
        });
      } else {
        this.outputString = "";
      }
    }
  }
}
