import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { DisqusModule } from 'ngx-disqus';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HeaderSearchComponent } from './header/header-search/header-search.component';
import { HomeComponent } from './home/home.component';
import { ExploreComponent } from './explore/explore.component';
import { NewsfeedComponent } from './home/newsfeed/newsfeed.component';
import { SidehomeComponent } from './home/sidehome/sidehome.component';
import { StorybarsComponent } from './home/storybar/storybar.component';

import { InstaService } from './services/insta.service';
import { AppRoutingModule } from './app-routing.module';
import { FooterComponent } from './home/footer/footer.component';
import { CommentComponent } from './home/comment/comment.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeaderSearchComponent,
    HomeComponent,
    ExploreComponent,
    NewsfeedComponent,
    SidehomeComponent,
    StorybarsComponent,
    FooterComponent,
    CommentComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CarouselModule,
    DisqusModule.forRoot('disqus_shortname')
  ],
  providers: [InstaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
