import { ProcessComponent } from "./../process";
import { Component, Input } from "@angular/core";

@Component({
  selector: "step-two",
  templateUrl: "step-two.html"
})
export class StepTwoComponent implements ProcessComponent {
  @Input()
  data: any;

  text: string;

  constructor() {
    console.log("Hello StepTwoComponent Component");
    this.text = "Hello World";
  }
}
