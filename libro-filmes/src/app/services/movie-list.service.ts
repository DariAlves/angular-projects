import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Movie } from '../Movie';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MovieListService {
  private apiKey = '6f92a2dbfacd23eeabc48df18da0faf4';
  private genre = 'popular';
  private page = 1;
  private language = 'en-US';
  private apiUrl = `https://api.themoviedb.org/3/movie/${this.genre}?api_key=${this.apiKey}&language=${this.language}&page=${this.page}`;

  constructor(private http: HttpClient) {}

  getMovies(): Observable<Movie> {
    return this.http.get<Movie>(this.apiUrl);
  }

  getItem(id: number): Observable<Movie> {
    return this.http.get<Movie>(
      `https://api.themoviedb.org/3/movie/${id}}?api_key=${this.apiKey}&language=${this.language}`
    );
  }
}
