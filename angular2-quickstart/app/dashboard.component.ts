import {Component, OnInit} from '@angular/core';

import {Hero} from './hero';
import {HeroService} from './hero.service';

@Component({
    selector: 'my-dashboard',
    templateUrl: 'app/dashboard.html'
})

export class DashboardComponent implements OnInit{

    ngOnInit(){
        this.heroService.getHeroes()
            .then(heroes => this.heroes = heroes.slice(1,5));
    }

    heroes: Hero[] = [];

    constructor(private heroService: HeroService){

    }
}