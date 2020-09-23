import { Injectable, TemplateRef } from "@angular/core";
import { BehaviorSubject } from "rxjs";

export interface TeleportInstance {
  [target: string]: TemplateRef<any>;
}

@Injectable({
  providedIn: "root",
})
export class DoTeleportService extends BehaviorSubject<TeleportInstance> {
  constructor() {
    super(null);
  }

  public activate(instance: TeleportInstance) {
    const newValue = { ...this.value, ...instance }
    this.next(newValue);
  }

  public clearAll() {
    this.next(null);
  }
}
