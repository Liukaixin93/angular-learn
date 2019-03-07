import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-font-resizer',
  templateUrl: './font-resizer.component.html',
  styleUrls: ['./font-resizer.component.scss']
})
export class FontResizerComponent implements OnInit {

  @Input() size: number | string;
  @Output() sizeChange = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  dec() {
    this.resize(-1);
  }

  inc() {
    this.resize(+1);
  }

  resize(delta: number) {
    this.size = Math.min(40, Math.max(8, + this.size + delta));
    this.sizeChange.emit(this.size);
  }
}
