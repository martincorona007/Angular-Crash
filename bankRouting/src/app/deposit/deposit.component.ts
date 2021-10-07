import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-deposit',
  templateUrl: './deposit.component.html',
  styleUrls: ['./deposit.component.css']
})
export class DepositComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
  }
  coins(){
    this.router.navigate(['coins'], {relativeTo:this.route});
  }
notes(){
    this.router.navigate(['notes'], {relativeTo:this.route});
  }
}
