﻿import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router-deprecated';

import { Hero } from './hero';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroService } from './hero.service';

@Component({
    selector: 'my-heroes',
    templateUrl: 'app/heroes.html',
    styleUrls: ['app/heroes.css'],
    directives: [HeroDetailComponent]
})
export class HeroesComponent implements OnInit {

    heroes: Hero[];
    selectedHero: Hero;
    addingHero : boolean = false;
    error : any;

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
        this.heroService.getHeroes()
        .then(heroes => this.heroes = heroes)
        .catch(error => this.error = error);
    }

    gotoDetail(){
      this.router.navigate(['HeroDetail', {id: this.selectedHero.id}]);
    }

    addHero(){
        this.addingHero = true;
        this.selectedHero = null;
    }

    close(savedHero: Hero){
        this.addingHero = false;
        if(savedHero){
            this.getHeroes();
        }
    }

    delete(hero: Hero, event: any){
        event.stopPropagation();
        this.heroService
        .delete(hero)
        .then(res =>{
            this.heroes = this.heroes.filter(h => h !== hero);
            if(this.selectedHero === hero){
                this.selectedHero = null;
            }
        })
        .catch(error => this.error = error);
    }

}


