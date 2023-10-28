import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';
import { AuthService } from '../demo/components/auth/auth.service';


@Directive({
  selector: '[dataBoxPermission]'
})
export class DataBoxPermissionDirective implements OnInit {
  @Input('dataBoxPermission') permission: string;

  constructor(private elementRef: ElementRef, private renderer: Renderer2, private authService: AuthService) {}

  ngOnInit() {
    this.checkPermission();
  }
  private checkPermission() {
    const userPermissions = this.authService.getUserPermissions();
    if (!userPermissions[this.permission]) {
      this.renderer.setProperty(this.elementRef.nativeElement, 'disabled', true);
      this.renderer.setStyle(this.elementRef.nativeElement, 'opacity', '0.6');
    }
  }
}
