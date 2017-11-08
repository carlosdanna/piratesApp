import { Component, OnInit } from '@angular/core';
import { Pirate } from '../pirate';
import { PirateService } from '../pirate.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  pirates: Pirate[] = [];
  constructor(private pirateService: PirateService) { }

  ngOnInit() {
    this.getPirates();
  }

  getPirates(): void {
    this.pirateService.getPirates()
      .subscribe(pirates => this.pirates = pirates.slice(1, 5));
  }

}
