import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-comp',
  templateUrl: './new-comp.component.html',
  styleUrls: ['./new-comp.component.css']
})
export class NewCompComponent implements OnInit {

  /** Input set */
  @Input() featureSet;
  /** Input set */
  constructor() { }

  ngOnInit(): void {
  }

}
