import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Component, OnInit, Input } from '@angular/core';
import { Pirate } from '../pirate';

import { PirateService } from '../pirate.service';


@Component({
  selector: 'app-pirate-detail',
  templateUrl: './pirate-detail.component.html',
  styleUrls: ['./pirate-detail.component.css']
})
export class PirateDetailComponent implements OnInit {
  @Input() pirate: Pirate;

  constructor(
    private route: ActivatedRoute,
    private pirateService: PirateService,
    private location: Location
  ) { }

  ngOnInit() {
    this.getPirate();
  }

  goBack(): void {
    this.location.back();
  }

  getPirate(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.pirateService.getPirate(id)
      .subscribe(pirate => this.pirate = pirate);
  }

  save(): void {
    this.pirateService.updatePirate(this.pirate)
      .subscribe(() => this.goBack());
  }
}
