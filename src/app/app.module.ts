import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {APP_ROUTING} from './app.routes';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/layaut/navbar/navbar.component';
import { MenuComponent } from './components/layaut/menu/menu.component';
import { FooterComponent } from './components/layaut/footer/footer.component';
import { HomeComponent } from './components/pages/home/home.component';
import { WidgetsComponent } from './components/pages/widgets/widgets.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MenuComponent,
    FooterComponent,
    HomeComponent,
    WidgetsComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
