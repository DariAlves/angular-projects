import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/Movie';
import { MovieListService } from 'src/app/services/movie-list.service';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.scss'],
})
export class MoviesListComponent implements OnInit {
  movies: Movie[] = [];

  constructor(private movieListService: MovieListService) {
    this.getMovies();
  }

  ngOnInit(): void {}

  getMovies(): void {
    this.movieListService.getMovies().subscribe((movies) => {
      this.movies = movies.results;
    });
  }
}
