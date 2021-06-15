import { Component, OnInit } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { NewsService } from '../news.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css'],
})
export class NewsComponent implements OnInit {
  alltopics$;
  errorObject = null;
  constructor(private service: NewsService) {}

  ngOnInit(): void {
    this.alltopics$ = this.service.getAllNewsItems().pipe(
      catchError((err) => {
        this.errorObject = err;
        console.log(err);
        throw 'Unexpected error';
      })
    );
  }
}
