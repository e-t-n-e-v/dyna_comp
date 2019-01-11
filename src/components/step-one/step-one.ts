import { ProcessComponent } from "./../process";
import { Component, Input } from "@angular/core";

@Component({
  selector: "step-one",
  templateUrl: "step-one.html"
})
export class StepOneComponent implements ProcessComponent {
  @Input()
  data: any;

  text: string;

  constructor() {
    console.log("Hello StepOneComponent Component");
    this.text = "Hello World";
  }
}
