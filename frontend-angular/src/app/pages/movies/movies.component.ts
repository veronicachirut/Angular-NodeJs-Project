import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MainService } from 'src/app/services/main.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  movies: any = [];

  constructor(private mainService: MainService, private router: Router) {}

  ngOnInit(): void {
    this.getAllMovies();
  }

  getAllMovies() {
    this.mainService.getAllMovies().subscribe((res: any) => {
      this.movies = res.allMovies;
    })
  }

  goToDetails(id) {
    console.log(id);
    this.router.navigate(["/moviedetails/"+ id]);
  }
}
