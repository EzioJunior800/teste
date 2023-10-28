import { Component, Input, OnInit } from "@angular/core";
import { NzTabPosition } from 'ng-zorro-antd/tabs';
import { ActionButtonService } from "src/app/infra/servicesActionButton/actionButton.service";

@Component({
  selector: 'app-content-tabs',
  templateUrl: './content-tabs.component.html',
  styleUrls: ['./content-tabs.component.scss']
})
export class ContentTabsComponent implements OnInit {

  route: any;

  constructor(private actionButtonService: ActionButtonService){}


  tabs: Array<{ name: string; content: string; disabled: boolean }> = [];
  nzTabPosition: NzTabPosition = 'top';
  selectedIndex = 27;

  /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
  log(args: any[]): void {
    console.log(args);
  }

  closeTab({ index }: { index: number }): void {
    this.tabs.splice(index, 1);
  }

  newTab(dttb: any): void {
    this.route = dttb;
    this.tabs.push(
      {
        name: dttb.label,
        disabled: false,
        content: `Content of tab`
      }
    );
    this.selectedIndex = this.tabs.length;
  }

  ngOnInit(): void {

    this.actionButtonService.getFunctionToExecute().subscribe((dataTab) => {      
      this.newTab(dataTab);
    });

    for (let i = 0; i < 5; i++) {
      this.tabs.push({
        name: `Tab ${i}`,
        disabled: i === 28,
        content: `Content of tab ${i}`
      });
    }
  }

}
