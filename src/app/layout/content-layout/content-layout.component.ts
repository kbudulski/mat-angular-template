import { Component, OnInit } from '@angular/core';
import { OverlayContainer } from '@angular/cdk/overlay';

@Component({
  selector: 'app-content-layout',
  templateUrl: './content-layout.component.html',
  styleUrls: ['./content-layout.component.scss']
})
export class ContentLayoutComponent implements OnInit {

  navigation = [
    {link: '/home', title: 'Home'},
    {link: '/tab-one', title: 'Tab One'},
    {link: '/tab-two', title: 'Tab Two'}
  ];
  logo = ('../../assets/logo.png');
  theme = 'default-theme';


  constructor() {

  }

  ngOnInit(): void {
    document.body.classList.add(this.theme, 'mat-app-background');
  }

}
