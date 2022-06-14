import { Injectable } from '@angular/core';
import { NavElement } from '../interfaces/nav-element.interface';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {
  private navElements : NavElement[] = [
    {id: 'nav-home', name: 'Home', route: '', icon: 'home'},
    {id: 'nav-idea', name: 'Ideas Board', route: '/ideas', icon: 'lightbulb'},
  ]
  
  
  constructor() { }
}
