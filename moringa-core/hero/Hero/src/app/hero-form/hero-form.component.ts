import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';
  

@Component({
  selector: 'app-hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.css']
})
export class HeroFormComponent implements OnInit {

  modelQuote = new Quote(0, 'Binyavanga Wainaina', 'He should have written more books', 'Valentine Robai Inziani');
  newQuote() {
    this.modelQuote = new Quote(0, "", "", "");
  }

  submitted = false;
  // onSubmit() { this.submitted = true; }

  quoteList = []
  onSubmit(){this.quoteList.push(this.modelQuote)}

  constructor() { }

  ngOnInit(): void {
  }

}
