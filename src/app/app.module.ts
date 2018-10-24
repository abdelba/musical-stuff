import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { TrackListComponent } from './ui/components/track-list/track-list.component';
import { TrackListItemComponent } from './ui/components/track-list-item/track-list-item.component';
import { TrackSearchService } from './services/track-search.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TrackListComponent,
    TrackListItemComponent
  ],
  imports     : [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers   : [TrackSearchService],
  bootstrap   : [AppComponent]
})
export class AppModule {
}
