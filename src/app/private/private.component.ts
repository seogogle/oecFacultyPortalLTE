import { Component, OnInit, OnDestroy } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-private',
  templateUrl: './private.component.html',
  styleUrls: ['./private.component.scss']
})
export class PrivateComponent implements OnInit, OnDestroy {

  constructor() { }

  ngOnInit() {
    //window.dispatchEvent(new Event('resize'));
    document.body.className = 'hold-transition sidebar-mini';
    $.widget.bridge('uibutton', $.ui.button)
  }

  ngOnDestroy() {
    document.body.className = '';
  }

}
