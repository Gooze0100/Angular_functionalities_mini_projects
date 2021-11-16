import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
// import { DataService } from 'src/app/data.service';
// cia tipo absoliutus kelias
import { DataService } from './../../data.service';

@Component({
  selector: 'app-country-edit',
  templateUrl: './country-edit.component.html',
  styleUrls: ['./country-edit.component.css'],
})
export class CountryEditComponent implements OnInit {
  country;
  world;
  id;
  constructor(
    // cia yra dependancy injections
    private route: ActivatedRoute,
    private dataService: DataService,
    private router: Router
  ) {}

  update(code, region, surface, pop, expectancy) {
    this.country.Code = code.value;
    this.country.Region = region.value;
    this.country.SurfaceArea = surface.value;
    this.country.Population = pop.value;
    this.country.LifeExpectancy = expectancy.value;

    // cia kvieciame router metoda ir nusiunciame issaugojus duomenis perkelti user i kita psl
    this.router.navigate(['/country', this.id]);
  }

  ngOnInit(): void {
    this.world = this.dataService.world;
    this.id = this.route.snapshot.params['id'];
    this.country = this.world[this.id];
  }
}
