import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import {
  debounceTime, distinctUntilChanged, switchMap
} from 'rxjs/operators';

import { ClubService } from '../club.service';
import { Club } from '../club';

@Component({
  selector: 'app-browse-clubs',
  templateUrl: './browse-clubs.component.html',
  styleUrls: ['./browse-clubs.component.scss']
})
export class BrowseClubsComponent implements OnInit {

  searchTerm: string = null;

  matchingClubs: Club[] = null;

  private searchTerms = new Subject<string>();

  constructor(
    private clubService: ClubService
  ) { }

  ngOnInit(): void {

    this.searchTerms.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((term: string) => this.clubService.searchClubs(term))
    ).subscribe(clubs => this.matchingClubs = clubs);
  }

  matchingClubsCount(): number {

    if (this.matchingClubs == null) {
      return 0;
    }

    return this.matchingClubs.length;
  }

  updateSearch(newTerm): void {
    this.searchTerms.next(newTerm);
  }

}
