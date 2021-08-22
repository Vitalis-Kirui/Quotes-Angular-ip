import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { QuotesConstructor } from '../quotes-constructor';

@Component({
  selector: 'app-qoutes-details',
  templateUrl: './qoutes-details.component.html',
  styleUrls: ['./qoutes-details.component.css']
})
export class QoutesDetailsComponent implements OnInit {

  @Input () quote! :QuotesConstructor;

  @Output () isComplete = new EventEmitter<boolean>();

  quoteDelete(complete : boolean){

    this.isComplete.emit(complete);

  };

  upCount(index: { upvote: number; }) {

    index.upvote += 1;

  }
  downCount(index: { downvote: number; }) {

    index.downvote += 1;

  }

  constructor() { }

  ngOnInit(): void {
  }

}
