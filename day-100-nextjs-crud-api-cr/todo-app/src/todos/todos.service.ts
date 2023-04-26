import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Todo } from '../models/todo.model';
import { Model } from 'mongoose';
@Injectable()
export class TodosService {
  constructor(@InjectModel('Todo') private readonly todoModel: Model<Todo>) {}

  async create(createTodoDto: CreateTodoDto): Promise<Todo> {
    if (createTodoDto.title === '') {
      throw new BadRequestException('Title is required');
    }
    const newTodo = new this.todoModel(createTodoDto);
    const result = newTodo.save();
    return result;
  }

  async findAll() {
    const result = await this.todoModel.find({});
    return result;
  }

  async findOne(id: string): Promise<Todo> {
    const todo = await this.todoModel.findById(id);
    return todo;
  }

  async update(id: string, updateTodoDto: UpdateTodoDto): Promise<Todo> {
    const result = await this.todoModel.findOneAndUpdate(
      { _id: id },
      updateTodoDto,
    );
    return result;
  }

  async remove(id: string) {
    const result = await this.todoModel.findByIdAndDelete({ _id: id });
    return result;
  }
}
