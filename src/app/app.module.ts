import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HighlighterDirectiveDirective } from './highlighter-directive.directive';
import { QoutesParentComponent } from './qoutes-parent/qoutes-parent.component';
import { QoutesDetailsComponent } from './qoutes-details/qoutes-details.component';
import { QoutesFormComponent } from './qoutes-form/qoutes-form.component';
import { DaysCounterPipe } from './days-counter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HighlighterDirectiveDirective,
    QoutesParentComponent,
    QoutesDetailsComponent,
    QoutesFormComponent,
    DaysCounterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
