import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbDropdown, NgbDropdownAnchor, NgbDropdownToggle, NgbDropdownMenu, NgbDropdownItem, NgbNavbar } from '@ng-bootstrap/ng-bootstrap';
import { AgmCoreModule } from '@agm/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HeaderSearchComponent } from './header/header-search/header-search.component';
import { HomeComponent } from './home/home.component';
import { ExploreComponent } from './explore/explore.component';
import { NewsfeedComponent } from './home/newsfeed/newsfeed.component';
import { SidehomeComponent } from './home/sidehome/sidehome.component';
import { StorybarsComponent } from './home/storybar/storybar.component';

import { AllusersService } from './services/allusers.service';
import { MyinfoService } from './services/myinfo.service';
import { FriendinfoService } from './services/friendinfo.service';
import { UserupdateService } from './services/userupdate.service';
import { AppRoutingModule } from './app-routing.module';
import { FooterComponent } from './home/sidehome/footer/footer.component';
import { CommentComponent } from './home/newsfeed/comment/comment.component';
import { LikeComponent } from './home/newsfeed/like/like.component';
import { AccountCardComponent } from './explore/account-card/account-card.component';
import { UserslicePipe } from './pipe/userslice.pipe';
import { MypageComponent } from './mypage/mypage.component';
import { MypostComponent } from './mypage/mypost/mypost.component';
import { MypageFooterComponent } from './mypage/mypage-footer/mypage-footer.component';
import { IgtvComponent } from './mypage/igtv/igtv.component';
import { SavedComponent } from './mypage/saved/saved.component';
import { TaggedComponent } from './mypage/tagged/tagged.component';
import { EditprofileComponent } from './editprofile/editprofile.component';
import { EditComponent } from './editprofile/edit/edit.component';
import { PasswordComponent } from './editprofile/password/password.component';
import { AccessComponent } from './editprofile/access/access.component';
import { EmailComponent } from './editprofile/email/email.component';
import { PushComponent } from './editprofile/push/push.component';
import { ContactComponent } from './editprofile/contact/contact.component';
import { PrivacyComponent } from './editprofile/privacy/privacy.component';
import { LoginComponent } from './editprofile/login/login.component';
import { InstaemailComponent } from './editprofile/instaemail/instaemail.component';
import { PhotochatComponent } from './photochat/photochat.component';

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
    LikeComponent,
    AccountCardComponent,
    UserslicePipe,
    MypageComponent,
    MypostComponent,
    MypageFooterComponent,
    IgtvComponent,
    SavedComponent,
    TaggedComponent,
    EditprofileComponent,
    EditComponent,
    PasswordComponent,
    AccessComponent,
    EmailComponent,
    PushComponent,
    ContactComponent,
    PrivacyComponent,
    LoginComponent,
    InstaemailComponent,
    PhotochatComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CarouselModule,
    FormsModule,
    NgbModule,
    CommonModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAXIN3ZdINgByRcKghqieNoanN-AOVuctI'
    })
  ],
  providers: [
    AllusersService,
    MyinfoService,
    FriendinfoService,
    UserupdateService,
    NgbDropdown,
    NgbDropdownAnchor,
    NgbDropdownToggle,
    NgbDropdownMenu,
    NgbDropdownItem,
    NgbNavbar],
  bootstrap: [AppComponent],
  exports: [
    RouterModule
  ]
})
export class AppModule { }
