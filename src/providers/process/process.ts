import { StepOneComponent } from "./../../components/step-one/step-one";
import { ProcessItem } from "./../../components/process-item";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { StepTwoComponent } from "../../components/step-two/step-two";
import { StepThreeComponent } from "../../components/step-three/step-three";

@Injectable()
export class ProcessProvider {
  constructor(public http: HttpClient) {
    console.log("Hello ProcessProvider Provider");
  }

  private dummyJsonResponse = {
    items: [
      {
        step: 1,
        desc: "1st"
      },
      {
        step: 2,
        desc: "2nd"
      },
      {
        step: 3,
        items: [
          {
            step: 3,
            desc: "3rd"
          },
          {
            step: 1,
            desc: "1st.1"
          }
        ]
      },
      {
        step: 1,
        desc: "1st"
      }
    ]
  };

  getProcessSteps(): ProcessItem[] {
    return this.getPageOrder(this.dummyJsonResponse.items);
  }

  private getPageOrder(steps): ProcessItem[] {
    let result: ProcessItem[] = [];

    for (let item of steps) {
      // if item has a child
      if (item.items) {
        result = result.concat(this.getPageOrder(item.items));
      } else {
        let comp = this.resolveComponentsName(item.step);
        let newItem = new ProcessItem(comp, item.desc);
        result.push(newItem);
      }
    }

    return result;
  }

  private resolveComponentsName(step) {
    if (step == 1) {
      return StepOneComponent;
    } else if (step == 2) {
      return StepTwoComponent;
    } else if (step == 3) {
      return StepThreeComponent;
    }
  }
}
