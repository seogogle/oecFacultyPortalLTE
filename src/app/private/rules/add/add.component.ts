import { Component, OnInit } from '@angular/core';

export type EditorType = 'cash' | 'finance' | 'outsude-finance';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class rulesAddComponent implements OnInit {

  editor: EditorType = 'cash';


  ngOnInit() {
  }

  get showCashEditor() {
    return this.editor === 'cash';
  }

  get showFinanceEditor() {
    return this.editor === 'finance';
  }

  get showOutsidefinanceEditor() {
    return this.editor === 'outsude-finance';
  }

  changeEditor(type: EditorType) {
    this.editor = type;
  }
}
