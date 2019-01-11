import { ProcessProvider } from "./../../providers/process/process";
import {
  Component,
  ViewChild,
  ViewContainerRef,
  ComponentFactoryResolver
} from "@angular/core";
import { NavController } from "ionic-angular";
import { ProcessComponent } from "../../components/process";

@Component({
  selector: "page-home",
  templateUrl: "home.html"
})
export class HomePage {
  @ViewChild("processContainer", { read: ViewContainerRef }) container;

  constructor(
    public navCtrl: NavController,
    private processProvider: ProcessProvider,
    private resolver: ComponentFactoryResolver
  ) {}

  ionViewDidEnter() {
    let steps = this.processProvider.getProcessSteps();
    console.log(steps);

    for (let step of steps) {
      const factory = this.resolver.resolveComponentFactory(step.component);
      let componentRef = this.container.createComponent(factory);
      (<ProcessComponent>componentRef.instance).data = step.desc;
    }
  }
}
