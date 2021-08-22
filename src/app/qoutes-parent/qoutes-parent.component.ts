import { Component, OnInit } from '@angular/core';
import { QuotesConstructor } from '../quotes-constructor';

@Component({
  selector: 'app-qoutes-parent',
  templateUrl: './qoutes-parent.component.html',
  styleUrls: ['./qoutes-parent.component.css']
})
export class QoutesParentComponent implements OnInit {

  appTitle = "Qoutes Central";

  introductionText = "Brigthen someone's face today with your favorite Quote.";

  quotesArray: QuotesConstructor [] = [

    new QuotesConstructor(1, "Live as if you were to die tomorrow. Learn as if you were to live forever.", "Mahatma Gandhi", "Kipyegon Kirui Vitalis", 0, 0, new Date(2020,3,14)),
    new QuotesConstructor(2, "If you cannot do great things, do small things in a great way.", "Napoleon Hill", "Hrithik Roshan", 0, 0,new Date(2021,3,14)),
    new QuotesConstructor(3, "Wise men speak because they have something to say; fools because they have to say something.", "Plato", "Mercy Daniel", 0, 0, new Date(2021,7,19))

  ];

  toggleDetails(index : number){

    this.quotesArray[index].showDetails = !this.quotesArray[index].showDetails;

  };

  spliceQoutesConstructor(isComplete : any, index : number){

    if(isComplete){

      let toDelete = confirm(`Are you sure you want to DELETE ${this.quotesArray[index].authorName} quote?`)

      if(toDelete){

        this.quotesArray.splice(index, 1)

      }

    }

  };

  addNewQuotesConstructor(quote: QuotesConstructor) {

    let quoteLength = this.quotesArray.length;

    quote.id = quoteLength + 1;

    this.quotesArray.push(quote);

  };

  upCount(upvote: QuotesConstructor) {

    this.quotesArray.push(upvote);

  }
  downCount(downvote: QuotesConstructor) {

    this.quotesArray.push(downvote);

  }

  getMostLikes() {

    return Math.max(...this.quotesArray.map(quote => quote.upvote))
    
  }

  constructor() { }

  ngOnInit(): void {
  }

}
