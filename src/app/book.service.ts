import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient } from '@angular/common/http';
import { Book } from "./book";
import { environment } from "src/environments/environment";

@Injectable({
    providedIn: 'root'
})
export class BookService{
    private apiServerUrl =  environment.apiBaseUrl;
    
    constructor(private http: HttpClient){ }

    public getBooks(): Observable<Book[]>{
        return this.http.get<any>(`${this.apiServerUrl}/book/all`);
    }

    public addBook(book: Book): Observable<Book>{
        return this.http.post<any>(`${this.apiServerUrl}/book/add`, book);
    }

    public updateBook(book: Book): Observable<Book>{
        return this.http.put<any>(`${this.apiServerUrl}/book/update`, book);
    }

    public deleteBook(bookId: number): Observable<void>{
        return this.http.delete<void>(`${this.apiServerUrl}/book/delete/${bookId}`);
    }
}