import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit {

  timer = 100;
   timerText;
  @Input()
  public hr: number;
  constructor() { }

  ngOnInit() {
    this.timer = this.hr * 60 * 60;
    setInterval(() => {
      this.timer =  (this.timer ) - 1;
      if (this.timer > 0) {
      this.timerText = this.toHHMMSS( this.timer);
      } else {
      this.timerText = '0';
      }
    }, 1000);
  }

 toHHMMSS = (secs) => {
    const sec = parseInt(secs, 10);
    const hours   = Math.floor(sec / 3600);
    const minutes = Math.floor(sec / 60) % 60;
    const seconds = sec % 60;

    return [hours, minutes, seconds]
        .map(v => v < 10 ? '0' + v : v)
        .filter((v, i) => v !== '00' || i > 0)
        .join(':');
}

}
