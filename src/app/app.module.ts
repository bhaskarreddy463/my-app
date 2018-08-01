import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

/* App Root */
import { AppComponent }   from './app.component';

/* Feature Modules */
import { ContactModule }    from './contact/contact.module';
import { CoreModule }       from './core/core.module';
import { CrisisModule } from './crisis/crisis.module';

/* Routing Module */
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    ContactModule,
    CrisisModule,
/*
    CoreModule,
*/
    CoreModule.forRoot({userName: 'Bhaskar Reddy'}),
    AppRoutingModule
  ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
