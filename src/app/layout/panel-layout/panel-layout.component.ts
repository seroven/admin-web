import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { navItems } from './data/items';

@Component({
  selector: 'app-panel-layout',
  templateUrl: './panel-layout.component.html',
  styleUrls: ['./panel-layout.component.scss'],
})
export class PanelLayoutComponent{
  public navItems;

  constructor(){
    this.navItems = navItems;

  }
}
