import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { FooterComponent } from './footer/footer.component';
import { BackdropComponent } from './header/backdrop/backdrop.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {IvyCarouselModule} from 'angular-responsive-carousel';
import { MobileNavigationComponent } from './header/mobile-navigation/mobile-navigation.component';
import { DesktopNavigationComponent } from './header/desktop-navigation/desktop-navigation.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    FooterComponent,
    BackdropComponent,
    MobileNavigationComponent,
    DesktopNavigationComponent,
  ],
  imports: [BrowserModule, BrowserAnimationsModule, IvyCarouselModule, NgbModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
