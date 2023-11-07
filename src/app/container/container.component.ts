import { Component, ViewChild } from '@angular/core';
import { ProductListComponent } from './product-list/product-list.component';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css'],
})
export class ContainerComponent {
  // name="IRAKIZA Didier"
  // addToCart: number=0;
  // product = {
  //   Name: 'iPhone 13',
  //   Price: 1000,
  //   Color: 'Matte White',
  //   Discount: 8.5,
  //   inStock: 10,
  //   pImage: "/assets/images/pImage.png"
  // }
  // getDiscount(){
  //   return this.product.Price-(this.product.Price * this.product.Discount/100)
  // }
  // onNameChange(event: any){
  //   // this.name=event.target.value;
  // }
  // decrementCartValue(){
  //   if(this.addToCart > 0){
  //     this.addToCart--
  //   }
  // }
  // incrementCartValue(){
  //   if(this.addToCart < this.product.inStock){
  //     this.addToCart++
  //   }
  // }

  searchText: string = '';

  @ViewChild(ProductListComponent) productListComponent: ProductListComponent;

  setSeachText(value: any) {
    this.searchText = value;
  }
}
