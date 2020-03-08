import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';

import { Quote } from '../../models';
import { QuoteService } from '../../services';

@Component({
  selector: 'app-quote-container',
  templateUrl: './quote-container.component.html',
  styleUrls: ['./quote-container.component.scss'],
})
export class QuoteContainerComponent implements OnInit {

  quote$: Observable<Quote>;

  constructor(private quoteService: QuoteService) {}

  ngOnInit(): void {
    this.getRandomQuote();
  }

  getRandomQuote(): void {
    this.quote$ = this.quoteService.getRandom();
  }

}
