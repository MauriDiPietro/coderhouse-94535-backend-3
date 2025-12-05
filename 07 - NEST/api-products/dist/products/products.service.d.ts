import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './entities/product.entity';
export declare class ProductsService {
    products: Product[];
    constructor();
    create(createProductDto: CreateProductDto): Product;
    findAll(): Product[];
    findOne(id: string): Product | null;
    update(id: number, updateProductDto: UpdateProductDto): string;
    remove(id: number): string;
}
