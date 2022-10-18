import { AbstractControl } from '@angular/forms';

export function ValidateHolderName(control: AbstractControl) {
    let value = control.value;
    if(value.length > 35){
        return { lengthError: true };
    }

    if(value.split(' ').length != 4){
        return { wordLengthError: true };
    }

    let format = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    if(format.test(value)){
        return { specialCharError: true };
    }
}