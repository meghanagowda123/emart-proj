import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Seller } from '../model/seller';

@Injectable({
  providedIn: 'root'
})
export class SellerService {

  baseUrl:string;
  constructor(private httpClient: HttpClient) {
    this.baseUrl = 'http://localhost:3000/allsellers';
   }

   getAll() : Observable<Seller[]>{
     return this.httpClient.get<Seller[]>(this.baseUrl)
   }

   getAllById(sellerId:number) : Observable<Seller>{
      return this.httpClient.get<Seller>(`${this.baseUrl}/${sellerId}`);
   }

   add(sellers:Seller) :Observable<Seller>{
     return this.httpClient.post<Seller>(this.baseUrl,sellers);
   }

   save(seller:Seller) :Observable<Seller>{
    return this.httpClient.post<Seller>(this.baseUrl,seller);
  }

  update(seller:Seller) : Observable<Seller>{
    return this.httpClient.put<Seller>(this.baseUrl,seller);
 }

 delete(sellerId:number) :Observable<Seller>{
  return this.httpClient.delete<Seller>(`${this.baseUrl + "/Seller"}/${sellerId}`);
}

}
