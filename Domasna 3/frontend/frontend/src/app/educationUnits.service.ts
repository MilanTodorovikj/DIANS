import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http'
import {EducationUnit} from "./EducationUnit";
import {Observable, of} from "rxjs";
import {EducationUnitFilter} from "./EducationUnitFilter";

@Injectable({
  providedIn: 'root'
})
export class EducationUnitsService {

  constructor(private http: HttpClient) {
  }

  urlAll: string = "http://localhost:8080/educationUnit/all";
  urlSpecific: string = "http://localhost:8080/educationUnit/";
  urlFiltered: string = "http://localhost:8080/educationUnit/filter";

  getEducationUnits() {
    return this.http.get<EducationUnit[]>(this.urlAll);
  }

  getEducationUnit(id: number) {
    return this.http.get<EducationUnit>(this.urlSpecific + id);
  }

  searchUnits(term: string): Observable<EducationUnit[]> {
    if (!term.trim()) {
      return of([]);
    }
    return this.http.get<EducationUnit[]>(`${this.urlSpecific}search?term=${term}`);
  }

  getEducationUnisFiltered(educationUnitFilter: EducationUnitFilter): Observable<EducationUnit[]> {
    let queryParams = new HttpParams();
    queryParams = queryParams.append("city", educationUnitFilter.city);
    queryParams = queryParams.append("type", educationUnitFilter.type);
    queryParams = queryParams.append("sort", educationUnitFilter.sort);

    return this.http.get<EducationUnit[]>(this.urlFiltered, {params: queryParams});
  }

}
