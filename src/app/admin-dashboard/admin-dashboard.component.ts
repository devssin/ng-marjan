import { Component, OnInit } from '@angular/core';
import { PromotionsService } from '../service/promotions.service';
import { promotion } from '../interfaces/promotion';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css'],
})
export class AdminDashboardComponent implements OnInit {
  promotions: Observable<Array<promotion>>;
  totalPages: Observable<number>;
  currentPage: Observable<number>;
  totalPagesArray: number[] = [];

  constructor(private promotionService: PromotionsService) {
    this.promotions = promotionService.promotions$;
    this.totalPages = promotionService.totalPages$;
    this.currentPage = promotionService.currentPage$;
  }

  ngOnInit(): void {
    this.promotionService.getPromotions(1).subscribe();
    this.totalPages.subscribe(totalPages => {
      this.totalPagesArray = Array.from({ length: totalPages }, (_, index) => index + 1);
    });
  }

  onPageChange(page: number) {
    this.promotionService.getPromotions(page).subscribe();
  }
}
