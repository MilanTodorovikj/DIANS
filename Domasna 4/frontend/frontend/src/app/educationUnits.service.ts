import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http'
import {EducationUnit} from "./EducationUnit";
import {Observable, of} from "rxjs";
import {EducationUnitFilter} from "./EducationUnitFilter";

@Injectable({
  providedIn: 'root'
})
export class EducationUnitsService {

  constructor(private http: HttpClient) {
  }

  url: string = "http://localhost:8080/educationUnit";

  addEducationUnit(unit: EducationUnit) {
    return this.http.post(`${this.url}/addNew`, unit);
  }

  deleteEducationUnit(id: number) {
    return this.http.delete(`${this.url}/delete/${id}`);
  }

  editEducationUnit(unit: EducationUnit, id: number) {
    return this.http.put(`${this.url}/edit/${id}`, unit);
  }

  getEducationUnits() {
    return this.http.get<EducationUnit[]>(`${this.url}/all`);
  }

  getEducationUnit(id: number) {
    return this.http.get<EducationUnit>(`${this.url}/${id}`);
  }

  searchUnits(term: string): Observable<EducationUnit[]> {
    if (!term.trim()) {
      return of([]);
    }
    return this.http.get<EducationUnit[]>(`${this.url}/search?term=${term}`);
  }

  getEducationUnisFiltered(educationUnitFilter: EducationUnitFilter): Observable<EducationUnit[]> {
    let queryParams = new HttpParams();
    queryParams = queryParams.append("city", educationUnitFilter.city);
    queryParams = queryParams.append("type", educationUnitFilter.type);
    queryParams = queryParams.append("sort", educationUnitFilter.sort);

    return this.http.get<EducationUnit[]>(`${this.url}/filter`, {params: queryParams});
  }

}
