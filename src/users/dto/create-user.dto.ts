import { IsEmail, IsNotEmpty, IsString, MinLength, IsOptional } from 'class-validator'

export class CreateUserDto {
    @IsString()
    @IsNotEmpty()
    full_name: string;
    
    @IsString()
    @MinLength(4)
    @IsNotEmpty()
    username: string;

    @IsString()
    @IsNotEmpty()
    @IsEmail()
    email: string;

    @IsString()
    @IsNotEmpty()
    @MinLength(4)
    password: string;

    @IsString()
    @IsOptional()
    countryName: string;
}