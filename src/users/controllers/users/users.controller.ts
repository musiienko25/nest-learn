import { Controller, Get, Post, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';

@Controller('users')
export class UsersController {
  @Get()
  getUsers() {
    return { username: "Anson" };
  }

  // @Get('posts')
  // getUsersPosts() {
  //   return [{ username: "anson", posts: [{ id: 1, title: "Post1" }, { id: 2, title: "Post2" }] }];
  // }

  // @Get('posts/comments')
  // getUsersPostsComments() {
  //   return [{ posts: [{ id: 1, title: "Post1" }, { id: 2, title: "Post2" }] }];
  // }

  @Post()
  createUser(@Req() request: Request, @Res() response: Response) {
    console.log(request.body);
    response.send("Created");
  }
}
