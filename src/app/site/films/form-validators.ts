import { AbstractControl, ValidatorFn } from "@angular/forms";


export class FormValidators {

    static intergerBetween(min:number, max:number): ValidatorFn{

        return(c: AbstractControl) => {
            if (!Number.isInteger(c.value)){
                //si la valeur n'est pas un entier
                return{
                    integer: {
                        valid: false
                    }
                }
            }
            else if ((c.value < min) || (c.value>max)){

                //si la valeur est en dehors des limites

                return{
                    limit: {
                        valid:false
                    }
                };
            }
            //si tout est ok

            return null;
        };
    }
}

