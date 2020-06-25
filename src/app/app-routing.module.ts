import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guard/auth.guard';

import { HomeComponent } from './home/home.component';
import { ExploreComponent } from './explore/explore.component';
import { MypageComponent } from './mypage/mypage.component';
import { IgtvComponent } from './mypage/igtv/igtv.component';
import { SavedComponent } from './mypage/saved/saved.component';
import { TaggedComponent } from './mypage/tagged/tagged.component';
import { MypostComponent } from './mypage/mypost/mypost.component';
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

const routes: Routes = [

  {path: '', component: HomeComponent},
  {path: 'photo', component: PhotochatComponent},
  {path: 'explore', component: ExploreComponent, canActivate: [AuthGuard]},

  {
    path: ':username', component: MypageComponent, canActivate: [AuthGuard],
    children: [
    {path: '', component: MypostComponent},
    {path: 'channel', component: IgtvComponent},
    {path: 'saved', component: SavedComponent},
    {path: 'tagged', component: TaggedComponent},
  ]},

  {
    path: 'accounts', component: EditprofileComponent, canActivate: [AuthGuard],
    children: [
    {path: 'edit', component: EditComponent},
    {path: 'password/change', component: PasswordComponent},
    {path: 'manage_access', component: AccessComponent},
    {path: 'emails/settings', component: EmailComponent},
    {path: 'push/web/settings', component: PushComponent},
    {path: 'contact_history', component: ContactComponent},
    {path: 'privacy_and_security', component: PrivacyComponent},
    {path: 'session/login_activity', component: LoginComponent},
    {path: 'emails/emails_sent', component: InstaemailComponent},
  ]},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
