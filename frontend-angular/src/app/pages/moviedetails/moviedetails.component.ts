import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MainService } from 'src/app/services/main.service';

@Component({
  selector: 'app-moviedetails',
  templateUrl: './moviedetails.component.html',
  styleUrls: ['./moviedetails.component.css']
})
export class MoviedetailsComponent implements OnInit {
  currentMovie: any = [];
  id: any;
  trailer: any;
  noCurrentMovieList: any = [];

  constructor(private activatedRoute: ActivatedRoute, private mainService: MainService) {
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe((param) => {
      this.id = param.id;
    });
    this.getMovieDetails();
  }

  getMovieDetails() {
    this.mainService
      .getMovieById(this.id)
      .subscribe((response: any) => {
        this.currentMovie = response.currentMovie;
        this.noCurrentMovieList = response.noCurrentMovieList;
        this.trailer = this.currentMovie.trailer;
      });
  }
}
