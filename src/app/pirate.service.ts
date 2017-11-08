import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

import { Pirate } from './pirate';
import { Observable } from 'rxjs/rx';
import { of } from 'rxjs/observable/of';
import { MessageService } from './message.service';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class PirateService {

  private piratesUrl = 'api/pirates';  // URL to web api

  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) { }

  getPirates(): Observable<Pirate[]> {
    this.messageService.add('PirateService: fetched pirates');
    return this.http.get<Pirate[]>(this.piratesUrl).pipe(
      tap(pirates => this.log(`fetched pirates`)),
      catchError(this.handleError('getPirates', []))
    );
  }

  /** GET pirates from the server */
  getPirate(id: number): Observable<Pirate> {
    const url = `${this.piratesUrl}/${id}`;
    this.messageService.add(`PirateService: fetched pirate id=${id}`);
    return this.http.get<Pirate>(url).pipe(
      tap(_ => this.log(`fetched pirate id=${id}`)),
      catchError(this.handleError<Pirate>(`getPirate id=${id}`))
    );
  }

  /** PUT: update the hero on the server */
  updatePirate(pirate: Pirate): Observable<any> {
    return this.http.put(this.piratesUrl, pirate, httpOptions).pipe(
      tap(_ => this.log(`updated pirate id=${pirate.id}`)),
      catchError(this.handleError<any>('updatePirate'))
    );
  }

  /** POST: add a new hero to the server */
  addPirate(pirate: Pirate): Observable<Pirate> {
    return this.http.post<Pirate>(this.piratesUrl, pirate, httpOptions).pipe(
      tap((pirate: Pirate) => this.log(`added pirate w/ id=${pirate.id}`)),
      catchError(this.handleError<Pirate>('addPirate'))
    );
  }

  /** DELETE: delete the hero from the server */
  deletePirate(pirate: Pirate | number): Observable<Pirate> {
    const id = typeof pirate === 'number' ? pirate : pirate.id;
    const url = `${this.piratesUrl}/${id}`;

    return this.http.delete<Pirate>(url, httpOptions).pipe(
      tap(_ => this.log(`deleted pirate id=${id}`)),
      catchError(this.handleError<Pirate>('deletePirate'))
    );
  }

  searchPirate(term: string): Observable<Pirate[]> {
    if (!term.trim()) {
      return of([]);
    }
    return this.http.get<Pirate[]>(`api/pirates/?name=${term}`).pipe(
      tap(_ => this.log(`found pirates matching "${term}`)),
      catchError(this.handleError<Pirate[]>('searchPirate', []))
    );
  }

  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    this.messageService.add('PirateService: ' + message);
  }

  /**
 * Handle Http operation that failed.
 * Let the app continue.
 * @param operation - name of the operation that failed
 * @param result - optional value to return as the observable result
 */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
