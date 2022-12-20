import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {EducationUnit} from "./EducationUnit";
import {Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class EducationUnitsService {

  constructor(private http: HttpClient) {
  }

  urlAll: string = "http://localhost:8080/educationUnit/all";
  urlSpecific: string = "http://localhost:8080/educationUnit/"

  getEducationUnits() {
    return this.http.get<EducationUnit[]>(this.urlAll);
  }

  getEducationUnit(id : number){
      return this.http.get<EducationUnit>(this.urlSpecific+id);
  }

  searchUnits(term: string): Observable<EducationUnit[]> {
    if (!term.trim()) {
      return of([]);
    }
    return this.http.get<EducationUnit[]>(`${this.urlSpecific}search?term=${term}`);
  }

}
