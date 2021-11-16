import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-world',
  templateUrl: './world.component.html',
  styleUrls: ['./world.component.css'],
})
export class WorldComponent implements OnInit {
  world;
  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.world = this.dataService.world;
  }
}
