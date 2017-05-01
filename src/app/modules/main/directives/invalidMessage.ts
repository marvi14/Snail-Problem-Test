import { Directive, Input, ElementRef, Renderer } from "@angular/core";

@Directive({
    selector: '[invalidMessage]'
})
export class InvalidMessageDirective {

    constructor(private element: ElementRef, private renderer: Renderer) {
        element.nativeElement.oninvalid = function (event) {
            configureValidations();
        }

        element.nativeElement.oninput = function (event) {
            configureValidations();
        };

        //we override the default message from the HTML5 forms validation, so we can give a more accurate message to the user
        function configureValidations() {
            if (element.nativeElement.pattern) {
                var re = new RegExp(element.nativeElement.pattern);
                if (!re.test(element.nativeElement.value))
                    element.nativeElement.setCustomValidity(element.nativeElement.attributes.invalidmessage.value);
                else
                    element.nativeElement.setCustomValidity('');
            } else if (element.nativeElement.required && !element.nativeElement.value) {
                element.nativeElement.setCustomValidity(element.nativeElement.attributes.invalidmessage.value);
            } else {
                element.nativeElement.setCustomValidity('');
            }
        }
    }
}