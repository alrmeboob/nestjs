import { IsNotEmpty, IsString, MinLength, IsOptional } from 'class-validator'


export class CreateProductDto {
    @IsString()
    @IsNotEmpty()
    title: string;
   
    price: string;

    @IsString()
    @IsNotEmpty()
    @MinLength(4)
    description: string;

    @IsString()
    @IsOptional()
    category: string;

    @IsString()
    @IsOptional()
    image: string;
}
