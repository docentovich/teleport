import {
  Directive,
  Input,
  OnChanges,
  OnDestroy,
  SimpleChanges,
  TemplateRef,
} from "@angular/core";
import { DoTeleportService } from "./do-teleport.service";

@Directive({
  selector: "[doTeleport]",
})
export class DoTeleportDirective implements OnChanges, OnDestroy {
  constructor(
    private teleport: DoTeleportService,
    private template: TemplateRef<any>
  ) {}

  @Input("doTeleport") target: string;

  ngOnChanges(changes: SimpleChanges) {
    const target = changes.target;
    if (!target) {
      return;
    }
    target.previousValue &&
      this.teleport.activate({ [target.previousValue]: null });
    target.currentValue &&
      this.teleport.activate({ [target.currentValue]: this.template });
  }

  ngOnDestroy() {
    this.target && this.teleport.activate({ [this.target]: null });
  }
}
