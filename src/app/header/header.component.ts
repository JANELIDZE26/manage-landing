import { Component, OnInit } from '@angular/core';
import {animate, style, transition, trigger} from '@angular/animations';
import {BreakpointObserver} from '@angular/cdk/layout';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['../shared/styles/btn.css', './header.component.css'],
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate(200, style({ opacity: 1 })),
      ]),
      transition(':leave', [animate(200, style({ opacity: 0 }))]),
    ]),
  ],
})
export class HeaderComponent implements OnInit {
  showNav = false;
  isScreenSmall: boolean | undefined;
  constructor(private breakpointObserver: BreakpointObserver) { }

  ngOnInit(): void {
    this.breakpointObserver.observe([
      '(max-width: 992px)',
    ]).subscribe(result => {
      console.log(result);
      this.isScreenSmall = result.matches;
    });
  }
}
