import { Injectable } from "@angular/core";
import {Product} from "./product.model";
import {StaticDatasource} from "./static.datasource";

@Injectable()
export class ProductRepository{
  private products: Product[] = [];
  private categories?: (string | null)[] = [];

  constructor(private dataSource: StaticDatasource){
    dataSource.getProducts().subscribe(data => {
      this.products = data;
      //Type '(string | null | undefined)[]' is not assignable to type '(string | null)[]'.
      //Type 'string | null | undefined' is not assignable to type 'string | null'.
      //Type 'undefined' is not assignable to type 'string | null'.
      this.categories = data.map(p => p.category)
        .filter((c, index, array) => array.indexOf(c) == index).sort();
    });
  }

  getProducts(category?: string): Product[] {
    return this.products.filter(
      p => category ==null || category == p.category);
  }

  getProduct(id: number): Product {
    //Type 'Product | undefined' is not assignable to type 'Product'.
    //Type 'undefined' is not assignable to type 'Product'.
    return this.products.find(p => p.id == id);
  }

  getCategories(): string[] {
    //Type '(string | null)[] | undefined' is not assignable to type 'string[]'.
    //Type 'undefined' is not assignable to type 'string[]'.
    return this.categories;
  }
}
