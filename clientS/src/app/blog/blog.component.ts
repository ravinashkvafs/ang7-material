import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {
  messages = ['Hello...', 'How are you ?', 'Hope you are fine...', 'Thanks for connecting with us !'];
  rank = 0;
  _h1;
  cbType = (e) => {
    this._h1 = document.getElementsByTagName("h1")[0];
    this._h1.style.webkitAnimation = 'none';
    setTimeout(() => {

      this._h1.innerHTML = this.messages[this.rank];
      let time = this.messages[this.rank].length * 0.25;
      let steps = this.messages[this.rank].length * 3;

      this._h1.style.webkitAnimation = `typewriter ${time}s steps(${steps}) 1s 1 normal both`;

      console.log('time:', time, 'steps:', steps, 'rank:', this.rank, 'word:', this.messages[this.rank]);

      this.rank = (this.rank + 1) % this.messages.length;


    }, 1000);
  };


  constructor() {
    console.log('Loaded Blog!');
  }

  dynamic_statement: string = '';
  closeI: any;
  indx: number = 0;
  eachC: number = -1;
  increment: boolean = true;
  buffer_time: number = 20;

  ngOnInit() {
    // Code for Chrome, Safari and Opera
    document.getElementById("myTypewriter").addEventListener("webkitAnimationEnd", this.cbType);

    // Standard syntax
    document.getElementById("myTypewriter").addEventListener("animationend", this.cbType);

    this.closeI = setInterval(() => {
      if (this.indx < this.messages.length)
        if (this.eachC == this.messages[this.indx].length && this.buffer_time != 0)
          return --this.buffer_time;
        else
          this.buffer_time = 20;

      if (this.indx < this.messages.length) {
        this.increment ? (this.eachC++ , this.eachC == this.messages[this.indx].length ? this.increment = false : null) : (this.eachC-- , this.eachC == -1 ? (this.increment = true, this.indx++) : null);

        if (this.indx < this.messages.length && this.eachC >= 0)
          this.dynamic_statement = this.messages[this.indx].slice(0, this.eachC);
      }

    }, 100);
  }

  height_progress: number = 0;

  @HostListener("window:scroll", [])
  onWindowScroll() {
    const total_height = document.getElementById("body").scrollHeight;

    const non_visible_height = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;

    const visible_height = window.innerHeight;

    this.height_progress = (non_visible_height / (total_height - visible_height)) * 100;

    if (non_visible_height > 500 || true) {
      console.log('You are 500px from the top to bottom');
    }
    // else
    //   this.height_progress = false;

  }
}
