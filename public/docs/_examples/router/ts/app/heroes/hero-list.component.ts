// #docplaster

// #docregion
// TODO SOMEDAY: Feature Componetized like HeroCenter
import {Component, OnInit}   from 'angular2/core';
import {Hero, HeroService}   from './hero.service';
import {Router}              from 'angular2/router';

@Component({
  // #docregion template
  template: `
    <h2>HEROES</h2>
    <ul>
      <li *ngFor="#hero of heroes"
        (click)="onSelect(hero)">
        <span class="badge">{{hero.id}}</span> {{hero.name}}
      </li>
    </ul>
  `
  // #enddocregion template
})
export class HeroListComponent implements OnInit {
  public heroes: Hero[];
  public selectedHero: Hero;

  // #docregion ctor
  constructor(
    private _router: Router,
    private _service: HeroService) { }
  // #enddocregion ctor

  ngOnInit() {
    this._service.getHeroes().then(heroes => this.heroes = heroes)
  }
  // #docregion select
  onSelect(hero: Hero) {
    this._router.navigate( ['HeroDetail', { id: hero.id }] );
  }
  // #enddocregion select
}
// #enddocregion

/* A link parameters array
// #docregion link-parameters-array
['HeroDetail', { id: hero.id }] // {id: 15}
// #enddocregion link-parameters-array
*/