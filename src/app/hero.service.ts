import { Injectable } from '@angular/core';
import {HEROES} from '../fake-heroes';
import { Hero } from '../hero';


@Injectable()
export class HeroService {

  constructor() { }

  getHeroes(): Hero[] {
  return HEROES;
}

}