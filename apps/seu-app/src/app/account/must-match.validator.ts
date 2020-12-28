import { FormGroup } from '@angular/forms';

// custom validator to check that two fields match
export function MustMatch(controlName: string, matchingControlName: string) {
    return (formGroup: FormGroup) => {

        const control = formGroup.controls[controlName];
        const matchingControl = formGroup.controls[matchingControlName];
        //console.log('MustMatchDirective',formGroup,control,matchingControl);

        // return null if controls haven't initialised yet
        if (!control || !matchingControl) {
            //console.log("NULL 2");
          return null;
        }

        // return null if another validator has already found an error on the matchingControl
        if (matchingControl.errors && !matchingControl.errors.mustMatch) {
            //console.log("NULL 1");
            return null;
        }

        // set error on matchingControl if validation fails
        if (control.value !== matchingControl.value) {
            matchingControl.setErrors({ mustMatch: true });
        } else {
            matchingControl.setErrors(null);
        }
    }
}