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

    new QuotesConstructor(1, "Live as if you were to die tomorrow. Learn as if you were to live forever.", "Mahatma Gandhi", "Kipyegon Kirui Vitalis"),
    new QuotesConstructor(2, "If you cannot do great things, do small things in a great way.", "Napoleon Hill", "Hrithik Roshan"),
    new QuotesConstructor(3, "Wise men speak because they have something to say; fools because they have to say something.", "Plato", "Mercy Daniel")

  ];

  constructor() { }

  ngOnInit(): void {
  }

}
