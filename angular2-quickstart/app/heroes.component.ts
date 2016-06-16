import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router-deprecated';

import { Hero } from './hero';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroService } from './hero.service';

@Component({
    selector: 'my-heroes',
    templateUrl: 'app/heroes.html',
    styleUrls: ['app/heroes.css']
})
export class HeroesComponent implements OnInit {

    heroes: Hero[];
    title = 'The one true app!';
    selectedHero: Hero;

    constructor(private heroService: HeroService, 
                private router: Router){
       
    }

    ngOnInit(){
        this.getHeroes();
    }

    onSelect(hero: Hero) {
        this.selectedHero = hero;
    }

    getHeroes(){
        this.heroService.getHeroes().then(heroes => this.heroes = heroes);
    }

    gotoDetail(){
      this.router.navigate(['HeroDetail', {id: this.selectedHero.id}]);
    }

}


