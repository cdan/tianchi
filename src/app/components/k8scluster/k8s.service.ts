import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';

import { K8s } from './k8s';

@Injectable({
    providedIn: 'root'
})
export class K8sService {
    //URL for CRUD operations
    articleUrl = "/api/k8s";
    //Create constructor to get Http instance
    constructor(private http: HttpClient) { }
    //Fetch all articles
    getAllK8s(): Observable<K8s[]> {
        return this.http.get<K8s[]>(this.articleUrl).pipe(
            tap(k8s => console.log("Number of k8s cluster: " + k8s.length)),
            catchError(this.handleError)
        );
    }
    //Create article
    createK8s(k8s: K8s): Observable<number> {
        let httpHeaders = new HttpHeaders({
            'Content-Type': 'application/json'
        });
        return this.http.post<K8s>(this.articleUrl + "/" + k8s.id, k8s, {
            headers: httpHeaders,
            observe: 'response'
        }
        ).pipe(
            map(res => res.status),
            catchError(this.handleError)
        );
    }
    //Fetch article by id
    getK8sById(articleId: string): Observable<K8s> {
        return this.http.get<K8s>(this.articleUrl + "/" + articleId).pipe(
            tap(k8s => console.log(k8s.name + " " + k8s.kubeconf)),
            catchError(this.handleError)
        );
    }
    //Update article
    updateK8s(article: K8s): Observable<number> {
        let httpHeaders = new HttpHeaders({
            'Content-Type': 'application/json'
        });
        return this.http.put<K8s>(this.articleUrl + "/" + article.id, article, {
            headers: httpHeaders,
            observe: 'response'
        }
        ).pipe(
            map(res => res.status),
            catchError(this.handleError)
        );
    }
    //Delete article	
    deleteK8sById(articleId: string): Observable<number> {
        return this.http.delete<number>(this.articleUrl + "/" + articleId).pipe(
            tap(status => console.log("status: " + status)),
            catchError(this.handleError)
        );
    }
    private handleError(error: any) {
        console.error(error);
        return throwError(error);
    }
}
