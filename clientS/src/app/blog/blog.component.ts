import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

  constructor() {
    console.log('Loaded Blog!');
  }

  ngOnInit() {

  }

  down: boolean = false;

  @HostListener("window:scroll", [])
  onWindowScroll() {

    const number = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;

    if (number > 500) {
      this.down = true;
      console.log('You are 500px from the top to bottom', number, window.pageYOffset, document.documentElement.scrollTop, document.body.scrollTop);
    }
    // else
    //   this.down = false;

  }
}
