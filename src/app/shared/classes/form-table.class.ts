import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

export class FormTableClass {
  private formArray: FormArray;
  private formBuilder = new FormBuilder();

  constructor(formArrayName: string, formGroup: FormGroup) {
    this.formArray = formGroup.get(formArrayName) as FormArray;
  }

  save(value: any) {
    const newValue = this.formBuilder.group(value);
    this.formArray.push(newValue);
  }

  delete(index: number) {
    this.formArray.controls = this.formArray.controls.filter(c => c != this.formArray.controls[index]);
  }

  getRowData(index: number) {
    return this.formArray.controls[index].value;
  }

  getControls() {
    return this.formArray.controls;
  }
}
