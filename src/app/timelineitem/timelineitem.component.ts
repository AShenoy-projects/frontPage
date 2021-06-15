import { Component, Input, OnInit } from '@angular/core';
import { IDisplayList } from '../IModels/IDisplayList';

@Component({
  selector: 'fPtimelineitem',
  templateUrl: './timelineitem.component.html',
  styleUrls: ['./timelineitem.component.css']
})
export class TimelineitemComponent implements OnInit {

  @Input('newsItemObservable') topic: IDisplayList;

  constructor() { }

  ngOnInit(): void {
  }

}
