import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
})
export class ChildComponent implements OnInit {
  @Input() allItems = '';
  // @Input('allItems') childName;

  ngOnInit(): void {
    console.log(this.allItems);
  }
}
