import { Component, Input } from '@angular/core';
import { ClassToggleService, HeaderComponent } from '@coreui/angular';
import { IconSetService } from '@coreui/icons-angular';
import { cilMenu, cilUser, cilSettings, cilAccountLogout } from '@coreui/icons';
import { AuthService } from 'src/app/modules/auth/services/auth.service';
import { Router } from '@angular/router';
import { ToastService } from 'src/app/shared/services/toast.service';
import { EnumTypeMessage } from 'src/app/shared/enums/type-message.enum';

@Component({
  selector: 'app-panel-layout-header',
  templateUrl: './panel-layout-header.component.html',
  styleUrls: []
})
export class PanelLayoutHeaderComponent extends HeaderComponent {
  @Input() sidebarId: string = "sidebar";

  constructor(private classToggler: ClassToggleService, private authService:AuthService, private router:Router, private toastService:ToastService) {
    super();
  }

  // logout(){
  //   this.toastService.showMessage(EnumTypeMessage.LOGOUT_SUCCESS);
  //   this.authService.logout();
  //   this.router.navigate(['/auth/login']);
  // }
}
