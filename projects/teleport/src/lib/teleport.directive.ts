import {
  Directive,
  Input,
  OnChanges,
  OnDestroy,
  SimpleChanges,
  TemplateRef,
} from "@angular/core";
import { TeleportService } from "./teleport.service";

@Directive({
  selector: "[dTeleport]",
})
export class TeleportDirective implements OnChanges, OnDestroy {
  constructor(
    private teleport: TeleportService,
    private template: TemplateRef<any>
  ) {}

  @Input("dTeleport") target: string;

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
