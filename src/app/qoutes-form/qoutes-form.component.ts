import { Component, OnInit } from '@angular/core';
import { QuotesConstructor } from '../quotes-constructor';

@Component({
  selector: 'app-qoutes-form',
  templateUrl: './qoutes-form.component.html',
  styleUrls: ['./qoutes-form.component.css']
})
export class QoutesFormComponent implements OnInit {

  newQuote = new QuotesConstructor (0, "", "", "");

  constructor() { }

  ngOnInit(): void {
  }

}
