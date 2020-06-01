import { Injectable } from '@angular/core';
import {HEROES} from '../fake-heroes';


@Injectable()
export class HeroService {

  constructor() { }

  getHeroes(): Hero[] {
  return HEROES;
}

}