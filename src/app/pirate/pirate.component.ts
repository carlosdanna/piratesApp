import { Component, OnInit } from '@angular/core';
import { Pirate } from '../pirate';
import { PirateService } from '../pirate.service';

@Component({
    selector: 'app-pirate',
    templateUrl: 'pirate.component.html',
    styleUrls: ['./pirate.component.css']
})

export class PirateComponent implements OnInit {
    pirates: Pirate[];
    constructor(private pirateService: PirateService) { }

    ngOnInit() {
        this.getPirates();
    }

    getPirates(): void {
        this.pirateService.getPirates()
            .subscribe(pirates => this.pirates = pirates);
    }

    add(name: string): void {
        name = name.trim();
        if (!name) { return; }
        this.pirateService.addPirate({ name } as Pirate)
            .subscribe(pirate => {
                this.pirates.push(pirate);
            });
    }

    delete(pirate: Pirate): void {
        this.pirates = this.pirates.filter(p => p !== pirate);
        this.pirateService.deletePirate(pirate).subscribe();
    }
}
