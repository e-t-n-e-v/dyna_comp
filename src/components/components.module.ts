import { NgModule } from "@angular/core";
import { StepOneComponent } from "./step-one/step-one";
import { StepTwoComponent } from "./step-two/step-two";
import { StepThreeComponent } from "./step-three/step-three";
import { IonicModule } from "ionic-angular";
import { ButtonComponent } from './button/button';

@NgModule({
  declarations: [StepOneComponent, StepTwoComponent, StepThreeComponent,
    ButtonComponent,
    ButtonComponent],
  imports: [IonicModule],
  exports: [StepOneComponent, StepTwoComponent, StepThreeComponent,
    ButtonComponent,
    ButtonComponent]
})
export class ComponentsModule {}
