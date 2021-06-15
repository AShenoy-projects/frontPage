import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ITopic } from '../IModels/ITopic';
import { NewsService } from '../news.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css'],
})
export class NewsComponent implements OnInit {
  alltopics$;
  constructor(private service: NewsService) {}

  ngOnInit(): void {
    this.alltopics$ = this.service.getAllNewsItems();
  }
}
