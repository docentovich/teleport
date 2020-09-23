import { Attribute, Component, Input, TemplateRef } from "@angular/core";
import { Observable } from "rxjs";
import { TeleportService } from "./teleport.service";
import { filter, map } from "rxjs/operators";

@Component({
  selector: "d-teleport",
  template:
    '<ng-container *ngTemplateOutlet="template$ | async; context: context"></ng-container>',
})
export class TeleportComponent {
  readonly template$: Observable<TemplateRef<any>>;

  @Input() context: any;

  constructor(
    @Attribute("name") name: string,
    private teleport: TeleportService
  ) {
    this.template$ = teleport.pipe(
      filter((instance) => !instance || name in instance),
      map((instance) => instance && instance[name])
    );
  }
}
