import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { firebaseConfig } from '../environments/firebase.config';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { PostService } from '../services/post.service';

import { routing } from './app.routes';

import { AppComponent } from './app.component';
import { PostComponent } from './post/post.component';
import { PostDetailComponent } from './post-detail/post-detail.component';

@NgModule({
  declarations: [
    AppComponent,

    PostComponent,
    PostDetailComponent,
  ],
  imports: [
    BrowserModule,
    routing,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
  ],
  providers: [
    PostService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
