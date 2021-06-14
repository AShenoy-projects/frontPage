import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from 'src/environments/environment';
import { NewsService } from './news.service';
import { AboutComponent } from './about/about.component';
import { NewsComponent } from './news/news.component';
import { SearchComponent } from './search/search.component';
import { NewsitemComponent } from './newsitem/newsitem.component';
import { TimelineitemComponent } from './timelineitem/timelineitem.component';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    NewsComponent,
    SearchComponent,
    NewsitemComponent,
    TimelineitemComponent,
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    RouterModule.forRoot([
      {path: "about", component: AboutComponent},
      {path: "news", component: NewsComponent},
      {path: "**", component: NewsComponent},
    ]),
    NgbModule,
  ],
  providers: [
    NewsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
