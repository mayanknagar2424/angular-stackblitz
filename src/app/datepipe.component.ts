import { Component, Input } from '@angular/core';

@Component({
  selector: 'date-pipe',
  template: `<div><h4>
<p>Today is {{today | date}}</p>
<p>Or if you prefer, {{today | date:'fullDate'}}</p>
<p>Or if you medium, {{today | date:'medium'}}</p>
<p>The time is {{today | date:'h:mm a z'}}</p>
</h4></div>`,
  styles: [`h1 { font-family: Lato; }`],
})
export class DatePipeComponent {
  today: number = Date.now();
}
