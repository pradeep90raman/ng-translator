import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class UtilityService {
  constructor() {}

  public checkIsNotValid(value: String, numPressed: String) {
    console.log(value.slice(-1), numPressed);
    return value.length > 1
      ? value.slice(-1) == numPressed
      : value.slice(-1) == "#";
    //  return value.slice(-1) == "#" ? true : false;
  }

  // Utility function to convert number to equivalent Alphabet
  public numToAlpha = num => {
    if (num < 0 || typeof num !== "number") {
      return;
    }
    if (num >= 26) {
      num = num % 26;
    }
    const offset = 65;
    return String.fromCharCode(num + offset);
  };
}
