import { Directive,ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlighterDirective]'
})
export class HighlighterDirectiveDirective {

  constructor( private elem : ElementRef) { 

    this.elem.nativeElement.style.color = 'red';

  };

  // @HostListener ("click") onClicks (){

  //   this.highligther("red")

  // };

  // @HostListener ("dblclick") onDoubleClicks(){

  //   this.highligther("")

  // };

  // private highligther( action : string){

  //   this.elem.nativeElement.style.color = action;

  // };

}