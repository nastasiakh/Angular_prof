import {Injectable} from "@angular/core";
import {Product} from "./product.model";
import { from, Observable } from 'rxjs';

@Injectable()
export class StaticDatasource {
  private products: Product[] = [
    new Product("Category 1",1, "Product 1", "Product 1 (Category 1)", 100),
    new Product("Category 1",2, "Product 2", "Product 2 (Category 1)", 100),
    new Product("Category 1",3, "Product 3", "Product 3 (Category 1)", 100),
    new Product("Category 1",4, "Product 4", "Product 4 (Category 1)", 100),
    new Product("Category 1",5, "Product 5", "Product 5 (Category 1)", 100),
    new Product("Category 2",6, "Product 6", "Product 6 (Category 2)", 100),
    new Product("Category 2",7, "Product 7", "Product 7 (Category 2)", 100),
    new Product("Category 2",8, "Product 8", "Product 8 (Category 2)", 100),
    new Product("Category 2",9, "Product 9", "Product 9 (Category 2)", 100),
    new Product("Category 2",10, "Product 10", "Product 10 (Category 2)", 100),
    new Product("Category 3",11, "Product 11", "Product 11 (Category 3)", 100),
    new Product("Category 3",12, "Product 12", "Product 12 (Category 3)", 100),
    new Product("Category 3",13, "Product 13", "Product 13 (Category 3)", 100),
    new Product("Category 3",14, "Product 14", "Product 14 (Category 3)", 100),
    new Product("Category 3",15, "Product 15", "Product 15 (Category 3)", 100)
  ];

  getProducts(): Observable<Product[]> {
    return from([this.products]);
  }
}
