import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieListService } from 'src/app/services/movie-list.service';

import { Movie } from 'src/app/Movie';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss'],
})
export class MovieDetailComponent implements OnInit {
  movie?: Movie;

  constructor(
    private movieListService: MovieListService,
    private route: ActivatedRoute
  ) {
    this.getMovie();
  }

  ngOnInit(): void {}

  getMovie() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.movieListService
      .getItem(id)
      .subscribe((movie) => (this.movie = movie));
  }
}
