import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { SubjectInterfaceToken } from './interface/InjectionToken';
import { ClockService } from './service/clock/clock.service';
import { DigitalClockComponent } from './component/digital-clock/digital-clock.component';

@NgModule({
  declarations: [
    AppComponent,
    DigitalClockComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    ClockService,
    {provide: SubjectInterfaceToken, useExisting: ClockService}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
