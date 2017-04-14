import { Injectable } from '@angular/core';
import { Http }       from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Todos }           from './todos';

@Injectable()
export class AccueilService {

    constructor(private http: Http) {}


     getTodos(): Observable<Todos[]> {
    
    const url: string = "https://jsonplaceholder.typicode.com/todos"; 
    
    return this.http
               .get(url)
               .map(response => response.json() as Todos[]);
  }



}