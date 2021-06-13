import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private db:AngularFireDatabase) {}
  
}
