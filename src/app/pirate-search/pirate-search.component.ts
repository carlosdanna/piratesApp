import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { of } from 'rxjs/observable/of';

import {
  debounceTime, distinctUntilChanged, switchMap
} from 'rxjs/operators';

import { Pirate } from '../pirate';
import { PirateService } from '../pirate.service';

@Component({
  selector: 'app-pirate-search',
  templateUrl: './pirate-search.component.html',
  styleUrls: ['./pirate-search.component.css']
})
export class PirateSearchComponent implements OnInit {

  pirates$: Observable<Pirate[]>;
  private searchTerms = new Subject<string>();

  constructor(private pirateService: PirateService) { }

  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    this.pirates$ = this.searchTerms.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((term: string) => this.pirateService.searchPirate(term))
    );
  }

}
