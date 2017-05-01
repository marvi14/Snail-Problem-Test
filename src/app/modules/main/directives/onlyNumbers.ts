import { Directive, Input, ElementRef, Renderer } from "@angular/core";

@Directive({
    selector: '[onlyNumbers]'
})
export class OnlyNumbersDirective {

    constructor(private element: ElementRef, private renderer: Renderer) {
        element.nativeElement.onkeypress = function (event) {
            return event.charCode >= 48 && event.charCode <= 57;
        }
    }
}