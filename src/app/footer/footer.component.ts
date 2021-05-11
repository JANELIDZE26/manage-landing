import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css', '../shared/styles/btn.css'],
})
export class FooterComponent implements OnInit {
  windowSize: number | undefined;

  constructor() {
  }

  ngOnInit(): void {
  }
}
