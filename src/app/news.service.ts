import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { catchError, map } from 'rxjs/operators';
import { IDisplayList } from './IModels/IDisplayList';

@Injectable({
  providedIn: 'root',
})
export class NewsService {
  constructor(private db: AngularFireDatabase) {}

  getAllNewsItems() {
    return this.db
      .list('fPDB', (ref) => ref.orderByChild('lastUpdated'))
      .valueChanges()
      .pipe(
        map((topicsArray: IDisplayList[]) => {
          topicsArray.reverse();
          return topicsArray;
        }),
        map((topicsArray: IDisplayList[]) => {
          for (let eachTopic of topicsArray) {
            eachTopic.newsitems.reverse();
            const latestNewsItem = eachTopic.newsitems[0];
            eachTopic['latestNewsItem'] = latestNewsItem;
            eachTopic.newsitems.splice(0, 1);
          }
          return topicsArray;
        }),
        catchError((err) => {
          throw 'Error trying to map Topics source. Details: ' + err;
        })
      );
  }
}
