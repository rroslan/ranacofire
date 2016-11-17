import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { AngularFireModule } from 'angularfire2';
export const firebaseConfig = {
  apiKey: 'AIzaSyD3r907DxMWaxbqWTT-ltcdxaUQyA3CYgI',
  authDomain: 'ranaco.firebaseapp.com',
  databaseURL: 'https://ranaco.firebaseio.com',
  storageBucket: 'firebase-ranaco.appspot.com'
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

