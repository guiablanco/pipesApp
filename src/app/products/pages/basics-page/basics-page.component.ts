import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-page',
  templateUrl: './basics-page.component.html',
  styleUrls: ['./basics-page.component.css']
})
export class BasicsPageComponent {

  public nameLower: string = 'clive';
  public nameUpper: string = 'CLIVE';
  public fullName: string = 'ClIvE RoSFieLd';

  public customDate: Date = new Date();

}
