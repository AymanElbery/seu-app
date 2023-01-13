import { AbstractControl } from '@angular/forms';

export function ValidateIBAN(control: AbstractControl) {
    let value = control.value.toUpperCase();
    if(/^SA[0-9]{4}[A-Z0-9]{18}$/.test(value) && isValidIBAN(value)){
        return null;
    }else{
        return { invalidIBAN: true };
    }
}

function isValidIBAN(v){ //This function check if the checksum if correct
    v = v.replace(/^(.{4})(.*)$/,"$2$1"); //Move the first 4 chars from left to the right
    v = v.replace(/[A-Z]/g,function($e){return $e.charCodeAt(0) - 'A'.charCodeAt(0) + 10}); //Convert A-Z to 10-25
    var $sum = 0;
    var $ei = 1; //First exponent 
    for(var $i = v.length - 1; $i >= 0; $i--){
        $sum += $ei * parseInt(v.charAt($i),10); //multiply the digit by it's exponent 
        $ei = ($ei * 10) % 97; //compute next base 10 exponent  in modulus 97
    }; 
    return $sum % 97 == 1;
}