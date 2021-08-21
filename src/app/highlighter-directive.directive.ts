import { Directive,ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlighterDirective]'
})
export class HighlighterDirectiveDirective {

  constructor( private elem : ElementRef) { 

    // this.elem.nativeElement.style.backgroundColor = 'tomato';

  };

  @HostListener ("click") onClicks (){

    this.highligther("tomato")

  };

  @HostListener ("dblclick") onDoubleClicks(){

    this.highligther("")

  };

  private highligther( action : string){

    this.elem.nativeElement.style.backgroundColor = action;

  };

}
