import {Directive, ElementRef, HostListener, Input, Renderer2} from '@angular/core';

@Directive({
  selector: '[textColor]'
})
export class TextColorDirective {

  // 프로퍼티 바인딩을 통한 상태 전달
  @Input('textColor') color: string;
  // 일반 어트리뷰트의 정적 값의 전달.
  @Input() defaultColor: string;

  // p요소의 디렉티브 어트리뷰트에 대하여, 라디오 버튼 클릭시, 전달 된 color값을 해당 어트리뷰트의
  // 컬러 속성에 할당 하였으며, 마우스 엔터했을 때 지정된 색사잉 보이도록 처리하며,
  // 리브하면, 기본 색상으로 전환토록 처리함.



  constructor(
    private el: ElementRef, private renderer: Renderer2
  ) { }

  ngOnInit() {
    this.textColor(this.defaultColor);
  }

  @HostListener('mouseenter') handleMouseEnter() {
    this.textColor(this.color);
  }

  @HostListener('mouseleave') handleMouseLeave() {
    this.textColor(this.defaultColor);
  }

  private textColor(color: string) {
    this.renderer.setStyle(this.el.nativeElement, 'color', color);
  }

}
