import { Injectable } from '@angular/core';
import { NavElement } from '../interfaces/nav-element.interface';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {

  private activeClass : string = 'active';
  private prefix      : string = 'nav';
  private class       : string = 'nav-main-btn';

  private navElements : NavElement[] = 
  [
      {
        id: `${this.prefix}-home`
        , name: 'Home', route: ''
        , activeClass: this.activeClass
        , icon: 'home', class: this.class
        , routerLinkExact: true 
      },
      {
        id: `${this.prefix}-idea`
        , name: 'Ideas Board'
        , route: '/ideas'
        , activeClass: this.activeClass
        , icon: 'lightbulb'
        , class: this.class
        , children: 
        [
          {
            id: `${this.prefix}-detlef`
            , name: 'detlef', route: ''
            , activeClass: this.activeClass
            , icon: 'lightbulb'
            , class: this.class
            , routerLinkExact: true
            , children: 
            [
              {
                id: `${this.prefix}-baerbel`
                , name: 'baerbel'
                , route: ''
                , activeClass: this.activeClass
                , icon: 'lightbulb'
                , class: this.class
                , routerLinkExact: true
              }
            ]
          },
          {
            id: `${this.prefix}-powers`
            , name: 'powers'
            , route: ''
            , activeClass: this.activeClass
            , icon: 'home'
            , class: this.class
            , routerLinkExact: true 
          },
        ]
      },
  ]
  
  
  constructor() { }

  getNavElements() {
    return this.navElements.slice();
  }
}
