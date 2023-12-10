import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map } from 'rxjs';
import { promotion } from '../interfaces/promotion';



@Injectable({
  providedIn: 'root'
})
export class PromotionsService {
  private limit = 5;

  private  promotionsSebject= new BehaviorSubject<Array<promotion>>([]);
  promotions$ = this.promotionsSebject.asObservable();

  private totalPagesSubject = new BehaviorSubject<number>(0);
  totalPages$ = this.totalPagesSubject.asObservable();

  private currentPageSubject = new BehaviorSubject<number>(1);
  currentPage$ = this.currentPageSubject.asObservable();

  constructor( private http : HttpClient) {}
  getPromotions(page: number): Observable<void> {
    const url = `http://localhost:8000/promotions?_page=${page}&_limit=${this.limit}`;

    return this.http.get<promotion[]>(url, { observe: 'response' }).pipe(
      map(response => {
        this.promotionsSebject.next(response.body || []);
        const totalCountHeader = response.headers.get('X-Total-Count');
        const totalPages = totalCountHeader ? Math.ceil(Number(totalCountHeader) / this.limit) : 0;
        this.totalPagesSubject.next(totalPages);
        this.currentPageSubject.next(page);
      })
    );
  }

  addPromotion(promotion: promotion): Observable<any> {
    return this.http.post<promotion>('http://localhost:8000/promotions', promotion);
  }

  updatePromotion(promotion: promotion): Observable<any> {
    return this.http.put<promotion>(`http://localhost:8000/promotions/${promotion.id}`, promotion);
  }
  
}
