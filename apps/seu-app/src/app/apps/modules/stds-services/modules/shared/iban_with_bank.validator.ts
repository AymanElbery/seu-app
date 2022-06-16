import { AbstractControl, FormGroup } from '@angular/forms';

export function ValidateIBANBank(bank, iban) {
    return (formGroup: FormGroup) => {
        let bank_control = formGroup.controls[bank];
        let iban_control = formGroup.controls[iban];

        const bank_iban_value = bank_control.value;
        const iban_value = iban_control.value;

        if(iban_value.length > 6){
            let iban = iban_value.substring(4, 6);
            if(bank_iban_value !== iban){
                iban_control.setErrors({ ...(iban_control.errors || {}), mustMatch: true })
            }else{
                iban_control.setErrors({ ...(iban_control.errors || {})})
            }
        }
    }
}
