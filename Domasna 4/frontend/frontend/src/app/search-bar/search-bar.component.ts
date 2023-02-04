import {Component} from '@angular/core';
import {debounceTime, distinctUntilChanged, Observable, Subject, switchMap} from "rxjs";
import {EducationUnitsService} from "../educationUnits.service";
import {EducationUnit} from "../EducationUnit";

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent {

  results$: Observable<EducationUnit[]> | undefined;
  searchTerms = new Subject<string>();
  hide = true

  constructor(private educationUnitsService: EducationUnitsService) {
  }

  search(term: string): void {
    this.searchTerms.next(term);
    this.hide = term == "";
  }

  ngOnInit(): void {
    this.results$ = this.searchTerms.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((term: string) => this.educationUnitsService.searchUnits(term)),
    );
  }

}
