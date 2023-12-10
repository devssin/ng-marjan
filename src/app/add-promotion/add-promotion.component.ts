import { Component, OnInit } from '@angular/core';
import { promotion } from '../interfaces/promotion';
import { PromotionsService } from '../service/promotions.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { ProductsService } from '../service/products.service';

@Component({
  selector: 'app-add-promotion',
  templateUrl: './add-promotion.component.html',
  styleUrls: ['./add-promotion.component.css'],
})
export class AddPromotionComponent implements OnInit {
  products : Array<any> = []
  promotion: promotion = {
    id : null,
    dateDebut: '',
    dateFin: '',
    status: 'ONHOLD',
    percentage: 0,
    product: '',
  };
  constructor(
    private promoService: PromotionsService,
    private router: Router,
    private productService : ProductsService
  ) {}

  ngOnInit(): void {
    this.productService.getProducts().subscribe(
      (res) => {
        this.products = res;
      },
      (err) => console.log(err)
    );
  }
  addPromotion() {
    this.promoService.addPromotion(this.promotion).subscribe(
      (res) => {
        Swal.fire({
          icon: 'success',
          title: 'Promotion ajoutée avec succès',
          showConfirmButton: false,
          timer: 1500,
        }).then(() => {
          this.router.navigate(['/admin-dashboard']);
        });
        console.log(res);
      },
      (err) => console.log(err)
    );
  }
}
