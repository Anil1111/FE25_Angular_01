import { Directive, ElementRef, Renderer2, HostListener, HostBinding } from "@angular/core";

@Directive({
  selector: "[appHighLight]"
})
export class HighLightDirective {
  constructor(private elementRef: ElementRef, private render2: Renderer2) {}
  @HostListener("mouseenter") SuKienHover() {
    this.render2.setStyle(
      this.elementRef.nativeElement,
      "background-color",
      "blue"
    );
  }
  @HostBinding('style.backgroundColor') bgColor: string = "aqua";
  @HostListener("mouseleave") SuKienLeave() {
    this.render2.setStyle(
      this.elementRef.nativeElement,
      "background-color",
      "red"
    );
  }
  ngOnInit() {
    //this.elementRef.nativeElement.style.backgroundColor = "blue";
    this.render2.setStyle(
      this.elementRef.nativeElement,
      "background-color",
      "red"
    );
  }
}
