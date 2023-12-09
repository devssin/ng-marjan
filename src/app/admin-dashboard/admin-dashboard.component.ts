import { Component, OnInit } from '@angular/core';
import { PromotionsService } from '../service/promotions.service';
@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css'],
})
export class AdminDashboardComponent implements OnInit {
  promotions: Array<any> = [];
  constructor(private promotionService: PromotionsService) {}

  ngOnInit(): void {
    this.promotionService.getPromotions().subscribe(
      (res) => {
        this.promotions = res;
        console.log(this.promotions);
      },
      (err) => console.log(err)
    );
  }
}
