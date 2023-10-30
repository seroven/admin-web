import { Component } from '@angular/core';
import { FooterComponent } from '@coreui/angular';
import { IconSetService } from '@coreui/icons-angular';
import { cilMenu } from '@coreui/icons';

@Component({
  selector: 'app-panel-layout-footer',
  templateUrl: './panel-layout-footer.component.html',
  styleUrls: []
})
export class PanelLayoutFooterComponent extends FooterComponent {

  constructor(){
    super();
  }

}
