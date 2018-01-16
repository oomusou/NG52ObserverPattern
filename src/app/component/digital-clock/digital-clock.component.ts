import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { ObserverInterface } from '../../interface/observer.interface';
import { SubjectInterfaceToken } from '../../interface/InjectionToken';
import { SubjectInterface } from '../../interface/subject.interface';

@Component({
  selector: 'app-digital-clock',
  templateUrl: './digital-clock.component.html',
  styleUrls: ['./digital-clock.component.css']
})
export class DigitalClockComponent implements ObserverInterface, OnInit, OnDestroy {
  now: Date;

  constructor(
    @Inject(SubjectInterfaceToken)
    private clockService: SubjectInterface) {
  }

  ngOnInit(): void {
    this.clockService.addObserver(this);
  }

  ngOnDestroy(): void {
    this.clockService.removeObserver(this);
  }

  update(date: Date) {
    this.now = date;
  }
}
