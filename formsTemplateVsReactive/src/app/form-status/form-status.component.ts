import { Component, Input } from "@angular/core";
import { NgForm, FormGroup } from "@angular/forms";

@Component({
  selector: "app-form-status",
  templateUrl: "./form-status.component.html",
  host: { class: "p-3" }
})
export class FormStatusComponent {
  @Input()
  set forForm(value: NgForm | FormGroup) {
    if (value instanceof NgForm) {
      this.form = value.form;
      return;
    }
    this.form = value;
  }

  public form: FormGroup | undefined;
}
