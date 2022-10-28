import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostComponent } from './post/post.component';
import { PostListComponent } from './post-list/post-list.component';
import { AuthenticationComponent } from './authentication/authentication.component';
import { PostEditComponent } from './post-edit/post-edit.component';
import { HeaderComponent } from './header/header.component';
import { CompanyComponent } from './company/company.component';

@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    PostListComponent,
    AuthenticationComponent,
    PostEditComponent,
    HeaderComponent,
    CompanyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
