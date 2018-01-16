import { ObserverInterface } from './observer.interface';

export interface SubjectInterface {
  addObserver(observer: ObserverInterface): void;
  removeObserver(observer: ObserverInterface): void;
}
