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

  ngOnInit() { }

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
