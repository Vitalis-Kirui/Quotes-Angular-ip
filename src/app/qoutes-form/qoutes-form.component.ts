import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { QuotesConstructor } from '../quotes-constructor';

@Component({
  selector: 'app-qoutes-form',
  templateUrl: './qoutes-form.component.html',
  styleUrls: ['./qoutes-form.component.css']
})
export class QoutesFormComponent implements OnInit {

  newQuote = new QuotesConstructor (0, "", "", "", 0, 0, new Date);

  @Output () addQuote = new EventEmitter <QuotesConstructor>();

  submitQuotesConstructor(){

    this.addQuote.emit(this.newQuote);
//adding new quote without deliting the existing one
    this.newQuote = new QuotesConstructor(0,"", "", "", 0, 0, new Date);

  };

  constructor() { }

  ngOnInit(): void {
  }

}
