import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from './schema/user.schema';

@Injectable()
export class UsersService 
{
  constructor(@InjectModel(User.name) private userModel : Model<UserDocument>) {}
  async create(createUserDto: CreateUserDto) 
  {
    try
    {
      const createdUser = new this.userModel(createUserDto)
      const insertQuery = await createdUser.save()
      
      return {status:true, message:insertQuery}
    }
    catch(e)
    {
      return { status:false, message:{alertMessage:e.message}}
    }
  }

  async findAll() 
  { 
    try
    {
      const getQuery = await this.userModel.find({}, {full_name:1, email:1, username:1})
      
      return { status:true, message: getQuery }
    }
    catch(e)
    {
      return { status:false, message:{alertMessage:e.message}}
    }
  }

  async findOne(id: string) 
  {
    try
    {
      const getQuery = await this.userModel.findOne({_id:id}, {full_name:1, email:1, username:1})
      if(getQuery)
      {
        return { status:true, message: getQuery }
      }
      else
      {
        return { status:true, message: {alertMessage:"Invalid user row id"} }
      }
      
    }
    catch(e)
    {
      return { status:false, message:{alertMessage:e.message}}
    }
   
  }

  async update(id: string, updateUserDto: UpdateUserDto) 
  {
    try
    {
      await this.userModel.updateOne({_id:id}, {$set:updateUserDto})
      
      return {status:true, message:{alertMessage:"This user details has been updated successfully. Thank you"}}
    }
    catch(e)
    {
      return { status:false, message:{alertMessage:e.message}}
    }
    
  }

  async remove(id: string) 
  {
    try
    {
      
      const getQuery = await this.userModel.findOneAndDelete({_id:id})
      if(getQuery)
      {
        return { status:true, message:{alertMessage:"This user details has been deleted successfully. Thank you"} }
      }
      else
      {
        return { status:true, message:{alertMessage:"Sorry, invalid user row id."} }
      }
    }
    catch(e)
    {
      return { status:false, message:{alertMessage:e.message}}
    }
   
  }
}
