import { ProcessComponent } from "./../process";
import { Component, Input } from "@angular/core";

@Component({
  selector: "step-three",
  templateUrl: "step-three.html"
})
export class StepThreeComponent implements ProcessComponent {
  @Input()
  data: any;

  text: string;

  constructor() {
    console.log("Hello StepThreeComponent Component");
    this.text = "Hello World";
  }
}
