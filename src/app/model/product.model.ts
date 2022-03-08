export class Product{
  constructor(
    public category?: string | null,
    public id?: number,
    public name?: string,
    public description?: string,
    public price?: number) { }
}
