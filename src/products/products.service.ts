import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
const apiUrl = 'https://fakestoreapi.com/products';

@Injectable()
export class ProductsService 
{
  constructor(private readonly httpService: HttpService) {}

  async create(createProductDto: CreateProductDto) 
  {
    try
    {
      
      const response = await this.httpService.axiosRef.post(apiUrl, createProductDto);
      if(response.data)
      {
          return {status:true, message:response.data}
      }
      else
      {
          return {status:false, message:{alertMessage:"No related data found."}}
      }
    }
    catch(e)
    {
      return {status:false, message:{alertMessage:e.message}}
    }
    
    return createProductDto
  }

  async findAll() 
  {
    try
    {
      const response = await this.httpService.axiosRef.get(apiUrl);
      if(response.data)
      {
          return {status:true, message:response.data}
      }
      else
      {
          return {status:false, message:{alertMessage:"No related data found."}}
      }
    }
    catch(e)
    {
      return {status:false, message:{alertMessage:e.message}}
    }
    
  }

  async findOne(id: number) 
  {
    try
    {
      const response = await this.httpService.axiosRef.get(apiUrl+'/'+id);
      if(response.data)
      {
          return {status:true, message:response.data}
      }
      else
      {
          return {status:false, message:{alertMessage:"Invalid product row id."}}
      }
    }
    catch(e)
    {
      return {status:false, message:{alertMessage:e.message}}
    }
  }

  update(id: number, updateProductDto: UpdateProductDto) {
    return `This action updates a #${id} product`;
  }

  async remove(id: number) 
  {
    try
    {
      const response = await this.httpService.axiosRef.delete(apiUrl+'/'+id);
      if(response.data)
      {
          return {status:true, message:response.data}
      }
      else
      {
          return {status:false, message:{alertMessage:"Invalid product row id"}}
      }
    }
    catch(e)
    {
      return {status:false, message:{alertMessage:e.message}}
    }
  }
}
