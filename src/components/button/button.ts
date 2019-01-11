import { ProcessComponent } from "./../process";
import { Component, Input } from "@angular/core";

@Component({
  selector: "button",
  templateUrl: "button.html"
})
export class ButtonComponent implements ProcessComponent {
  @Input()
  data: any;

  constructor() {}
}
