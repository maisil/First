export class Product {

    name:string;
    brand:string;
    category:string;
    price:number;
    imgUrl:string;
    quantity:number;

    constructor(prod:Product){
        this.name=prod.name || '';
        this.brand=prod.brand || '';
        this.category=prod.category || '';
        this.price=prod.price || 0.0;
        this.imgUrl=prod.imgUrl || '';
        this.quantity=prod.quantity || 0;
    }
}
