import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { FooterComponent } from './footer/footer.component';
import { HomepageComponent } from './homepage/homepage.component';
import { HeaderComponent } from './header/header.component';

import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { UploadpageComponent } from './uploadpage/uploadpage.component';
import { UserpageComponent } from './userpage/userpage.component';

const appRoutes: Routes = [
  {path: '', component: HomepageComponent},
  {path: 'home', component: HomepageComponent},
  {path: 'search', component: SearchComponent},
  {path: 'login', component: LoginComponent},
  {path: 'uploadpage', component: UploadpageComponent},
  {path: 'userpage', component: UserpageComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    FooterComponent,
    HomepageComponent,
    HeaderComponent,
    LoginComponent,
    UploadpageComponent,
    UserpageComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
