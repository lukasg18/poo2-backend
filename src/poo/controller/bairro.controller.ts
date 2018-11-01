import { Get, Controller, Param, Post, Body } from '@nestjs/common';
import { BairroService } from '../service/bairro.service';
import { Bairro } from '../model/bairro.entity';


@Controller()
export class BairroController {
  constructor(private readonly bairroService: BairroService) {}

  @Get('/bairro')
  readAll():any {
    return this.bairroService.readAll();
  }

  @Get('/bairro/:id')
  readOne(@Param() param):any {
    return this.bairroService.readOne(param.id);
  }

  @Post('/bairro')
  Create(@Body() body):any {
    return this.bairroService.Create(body);
  }

  @Post('/bairro/remove')
  public removeOne(@Body() body:Bairro) {
    return this.bairroService.Remove(body);
  }

  @Post('/bairro/update')
  public updateOne(@Body() body: Bairro) {
    return this.bairroService.Update(body);
  }
}