import { Component, OnInit } from '@angular/core';
import { UIService } from './core/services/ui.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public title = 'modsen-app';

  constructor(
    private uiService: UIService
  ) { }

  ngOnInit(): void {
    this.uiService.init();
  }
}
