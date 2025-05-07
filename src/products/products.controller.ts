import { Controller, Get, Post, Param, Query, Body, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';
import { HttpService } from '@nestjs/axios';

@Controller('products') // Base route: /routes
export class ProductsController 
{
  constructor(private readonly httpService: HttpService) {}

  @Get()
  async getProducts() {
    const apiUrl = 'https://fakestoreapi.com/products';
    const response = await this.httpService.axiosRef.get(apiUrl);
    if(response.data)
    {
        return {status:true, message:response.data}
    }
    else
    {
        return {status:false, message:{alertMessage:"No related data found."}};
    }
  }


  @Post()
  async insertProducts(@Body() body:{
    id: number,
    title: string,
    price: number,
    description: string,
    category: string,
    image: string
  }) 
  {
    const reqObj = {
        id:body.id,
        title:body.title,
        price:body.price,
        description:body.description,
        category:body.category,
        image:body.image,
    }

    const apiUrl = 'https://fakestoreapi.com/products'
    const response = await this.httpService.axiosRef.post(apiUrl, reqObj)
    return { status:true, message:response.data } 
  }

}

