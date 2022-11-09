import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-equipe',
  templateUrl: './equipe.component.html',
  styleUrls: ['./equipe.component.scss']
})
export class EquipeComponent implements OnInit {


  constructor(private readonly router:Router) { }

  ngOnInit() {
  }

  navigateToCityCreate(): void {
  this.router.navigate(['equipe/create']);
  }

}
