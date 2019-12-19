import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MatBadgeModule,
  MatButtonModule, MatButtonToggleModule,
  MatCardModule,
  MatDividerModule, MatExpansionModule,
  MatFormFieldModule, MatIconModule,
  MatInputModule,
  MatListModule, MatSnackBarModule, MatTableModule,
  MatToolbarModule
} from '@angular/material';
import {ItemDescComponent} from './item-desc/item-desc.component';
import {HomeComponent} from './home/home.component';
import {CartComponent} from './cart/cart.component';
import {CartItemComponent} from './cart/cart-item/cart-item.component';
import {FormsModule} from '@angular/forms';
import {AngularFireModule} from '@angular/fire';
import {environment} from '../environments/environment';
import {AngularFirestore, AngularFirestoreModule} from '@angular/fire/firestore';

@NgModule({
  declarations: [
    AppComponent,
    ItemDescComponent,
    HomeComponent,
    CartComponent,
    CartItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    // Mat Modules
    MatButtonModule,
    MatSnackBarModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatListModule,
    MatDividerModule,
    MatToolbarModule,
    MatExpansionModule,
    MatIconModule,
    MatBadgeModule,
    FormsModule,
    MatButtonToggleModule,
    MatTableModule,
    // FireBase Modules
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule.enablePersistence({
      synchronizeTabs: true
    })

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
