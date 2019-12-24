import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  transition,
  animate,
  keyframes
} from '@angular/animations';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-test',
  template: `
    <div class="container">
  <div class="row">
    <div class="col-xs-12">
      <h1>Animations</h1>
      <button class="btn btn-primary" (click)="onAnimate()">Animate!</button>
      <button class="btn btn-primary" (click)="onShrink()">Shrink!</button>
      <hr>
      <div [@divState]="state" style="width: 100px; height: 100px">
      </div>
    </div>
  </div>
  <hr>
  <div class="row">
    <div class="col-xs-12">
    <form #f="ngForm" >
      <input type="text" #input name="inputVal" ngModel class="form-control">
    
      <button type="button" (click)="onAdd(input.value)" class="btn btn-primary" >Add Item!</button>
      </form>
      <hr>
      <ul class="list-group">
        <li [@divState]="state"
          class="list-group-item"
          (click)="onDelete(item)"
          *ngFor="let item of list; let i = index" >
          {{ item }}
        </li>
      </ul>
    </div>
  </div>
</div>

  `,
  animations: [
    trigger('divState', [
      state('in', style({ backgroundColor: 'red', transform: 'translateX(0)' })),

      transition('void => *', [
        animate(1000, keyframes([
          style({ opacity: 0, transform: 'translateX(-100%)', offset: 0 }),
          style({ backgroundColor: '#bee0ff', opacity: 1, transform: 'translateX(15px)', offset: 0.3 }),
          style({ opacity: 1, transform: 'translateX(0)', offset: 1.0 })
        ]))
      ]),
      transition('* => void', [
        animate(300, keyframes([
          style({ opacity: 1, transform: 'translateX(0)', offset: 0 }),
          style({ opacity: 1, transform: 'translateX(-15px)', offset: 0.7 }),
          style({ opacity: 0, transform: 'translateX(100%)', offset: 1.0 })
        ]))
      ])
    ])
  ]
})

export class TestComponent implements OnInit {

  list = ['milk', 'sugar', 'flour'];

  state = 'normal';
  wildState = 'normal';

  //@ViewChild('f') addForm: NgForm;
  onAdd(item) {
    if (item !== '' || item == this.list.indexOf(item)) {
      this.list.push(item);
      //this.addForm.reset();
    }
  }

  onDelete(item) {
    this.list.splice(this.list.indexOf(item), 1);
  }

  onAnimate() {
    this.state == 'normal' ? this.state = 'highlighted' : this.state = 'normal'
  }

  onShrink() {
    this.wildState == 'normal' ? this.wildState = 'shrunk' : this.wildState = 'normal'
  }
  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
  }



}
