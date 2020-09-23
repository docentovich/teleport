import { Attribute, Component, Input, TemplateRef } from "@angular/core";
import { Observable } from "rxjs";
import { DoTeleportService } from "./do-teleport.service";
import { filter, map } from "rxjs/operators";

@Component({
  selector: "do-teleport",
  template:
    '<ng-container *ngTemplateOutlet="template$ | async; context: context"></ng-container>',
})
export class DoTeleportComponent {
  readonly template$: Observable<TemplateRef<any>>;

  @Input() context: any;

  constructor(
    @Attribute("name") name: string,
    private teleport: DoTeleportService
  ) {
    this.template$ = teleport.pipe(
      filter((instance) => !instance || name in instance),
      map((instance) => instance && instance[name])
    );
  }
}
