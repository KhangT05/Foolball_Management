import { Controller, Get, Path, Tags, Route, Post, Patch, Body, SuccessResponse, Delete } from "tsoa";
import { UserService, SafeUser } from "../services/user.service.js";
import * as userSchema from "../dtos/user.schema.js";

@Route("users")
@Tags("Users")
export class UserController extends Controller {
  constructor(private service: UserService) {
    super();
  }

  @Get("/")
  async findAll(): Promise<SafeUser[]> {
    return this.service.findAll();
  }

  @Get("{id}")
  async findById(@Path() id: number): Promise<SafeUser> {
    return this.service.findByIdOrFail(id);
  }

  @Post("/")
  @SuccessResponse(201, "Created")
  async create(@Body() body: userSchema.CreateUserDto): Promise<SafeUser> {
    this.setStatus(201);
    return this.service.create(body);
  }

  @Patch("{id}")
  async update(
    @Path() id: number,
    @Body() body: userSchema.UpdateUserDto
  ): Promise<SafeUser> {
    return this.service.update(id, body);
  }

  @Delete("{id}")
  @SuccessResponse(204, "Deleted")
  async softDelete(@Path() id: number): Promise<void> {
    this.setStatus(204);
    return this.service.softDelete(id);
  }
}
