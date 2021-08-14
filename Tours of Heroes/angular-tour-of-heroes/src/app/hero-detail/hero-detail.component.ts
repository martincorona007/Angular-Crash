//modules
import { Component, OnInit , Input} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
//components
import {Hero} from '../hero';
import { HeroService } from '../hero.service';

import { catchError } from 'rxjs/operators';
@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  //@Input() hero?: Hero;
  hero: Hero | undefined;
  constructor( private route: ActivatedRoute, private heroService: HeroService, private location: Location) { }

  ngOnInit(): void {
    this.getHero();
  }
  getHero(): void {
    const id = parseInt(this.route.snapshot.paramMap.get('id')!,10);
    this.heroService.getHero(id).subscribe(hero=> this.hero =hero);
  }
  goBack(): void {
    this.location.back();
  }
  save(): void {
    if(this.hero){
      this.heroService.updateHero(this.hero).subscribe(() => this.goBack());
    }
  }
  
  
}
