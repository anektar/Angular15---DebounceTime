import { Component, VERSION } from '@angular/core';
import { fromEvent, Observable, debounceTime } from 'rxjs';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;
  private clicks: Observable<Event>;
  private readonly result: Observable<Event>;

  public constructor() {
    this.initClicks(1000);

    this.result = this.clicks.pipe(debounceTime(1000));

    this.result.subscribe((x) => console.log('Clicked! Data:', x));
  }

  public initClicks(debounceTime: number = 1000): void {
    this.clicks = fromEvent(document, 'click');
  }
}
