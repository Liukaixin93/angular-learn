import { Directive, ElementRef, HostListener, Input, HostBinding } from '@angular/core';

@Directive({
  selector: '[my-high-light]'
})
export class MyHighLightDirective {

  // @Input() highlightColor: string; //属性型指令可以接受外面参数

  @HostBinding("style.border")
  border:string

  constructor(
    private el: ElementRef,
  ) {
    // console.log(el);
    // el.nativeElement.style.background = "#ff3300";
  }

  @HostListener('mouseenter') onmouseenter() {
    this.highlight("#ff55ff");
    // this.highlight(this.highlightColor);
  }

  @HostListener('mouseleave') onmouseleave() {
    this.highlight(null);
  }

  private highlight(color: string) {
    this.el.nativeElement.style.background = color;
  }

  @HostListener('click') onclick() {
    if(this.border){
      this.border = '';
    }else {
      this.border = "1px solid #00ee00";
    }
  }
}
