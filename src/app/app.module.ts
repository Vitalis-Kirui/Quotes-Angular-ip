import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HighlighterDirectiveDirective } from './highlighter-directive.directive';
import { QoutesParentComponent } from './qoutes-parent/qoutes-parent.component';
import { QoutesDetailsComponent } from './qoutes-details/qoutes-details.component';
import { QoutesFormComponent } from './qoutes-form/qoutes-form.component';

@NgModule({
  declarations: [
    AppComponent,
    HighlighterDirectiveDirective,
    QoutesParentComponent,
    QoutesDetailsComponent,
    QoutesFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
