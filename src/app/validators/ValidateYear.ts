import { AbstractControl } from '@angular/forms';

export function ValidateYear(control: AbstractControl) {
    if (parseInt(control.value) > (new Date()).getFullYear()) {
        return { validYear: true };
    }
    return null;
}

