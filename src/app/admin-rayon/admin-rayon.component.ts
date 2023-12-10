import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { promotion } from '../interfaces/promotion';
import { PromotionsService } from '../service/promotions.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-admin-rayon',
  templateUrl: './admin-rayon.component.html',
  styleUrls: ['./admin-rayon.component.css']
})
export class AdminRayonComponent implements OnInit {
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

  accepetPromotion(promotion: promotion) {
    if(promotion.status !== "ONHOLD") {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'You can only accept promotions with status ONHOLD',
      });
      return;
    }
    promotion.status = 'ACCEPTED';
    this.promotionService.updatePromotion(promotion).subscribe(
      res => {
        Swal.fire({
          icon:'success',
          title: 'Promotion Accepted',
          showConfirmButton: false,
          timer: 1500
        });
      },
      err => {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: err.error.message,
          footer: '<a href>Why do I have this issue?</a>'
        });
      }

    );
  }

  refusePromotion(promotion: promotion) {
    if(promotion.status!== "ONHOLD") {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'You can only refuse promotions with status ONHOLD',
      });
      return;
    }
    promotion.status = 'REFUSED';
    this.promotionService.updatePromotion(promotion).subscribe(
      res => {
        Swal.fire({
          icon:'success',
          title: 'Promotion Refused',
          showConfirmButton: false,
          timer: 1500
        });
      },
      err => {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: err.error.message,
          footer: '<a href>Why do I have this issue?</a>'
        });
      }

    );
  }




}
