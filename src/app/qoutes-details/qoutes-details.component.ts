import { Component, OnInit, Input } from '@angular/core';
import { QuotesConstructor } from '../quotes-constructor';

@Component({
  selector: 'app-qoutes-details',
  templateUrl: './qoutes-details.component.html',
  styleUrls: ['./qoutes-details.component.css']
})
export class QoutesDetailsComponent implements OnInit {

  @Input () quote! :QuotesConstructor;

  constructor() { }

  ngOnInit(): void {
  }

}
