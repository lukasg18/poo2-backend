import { Get, Controller, Res, HttpStatus, Param } from '@nestjs/common';
import { AtendenteService } from '../service/atendente.service';
import { Atendente } from '../model/atendente.entity';

@Controller()
export class AtendenteController {
  constructor(private readonly atendenteService: AtendenteService) {}


  @Get('/atendente/registro/:registro')
  async buscaCPF(@Res() res, @Param() numeroregistro) {
    try {
      let atendente:Atendente[] = await this.atendenteService.buscaRegistro(numeroregistro.registro);
      if (atendente != undefined) {
        res.status(HttpStatus.OK).send(atendente);
      } else {
        res
          .status(HttpStatus.NOT_FOUND)
          .send('Nenhum atendente encontrado na busca');
      }
    } catch (err) {
      res.status(HttpStatus.BAD_GATEWAY).send(err.message);
    }
  }

  @Get('/atendente/:id')
  async readOne(@Res() res, @Param() id) {
    try {
      let atendente: Atendente[] = await this.atendenteService.readOne(id.id);
      if (atendente != undefined) {
        res.status(HttpStatus.OK).send(atendente);
      } else {
        res
          .status(HttpStatus.NOT_FOUND)
          .send('Nenhum atendente encontrado na busca');
      }
    } catch (err) {
      res.status(HttpStatus.BAD_GATEWAY).send(err.message);
    }
  }


  @Get('/atendente')
  async readAll(@Res() res) {
    try {
      let atendente: Atendente[] = await this.atendenteService.readAll();
      if (atendente != undefined) {
        res.status(HttpStatus.OK).send(atendente);
      } else {
        res
          .status(HttpStatus.NOT_FOUND)
          .send('Nenhum atendente encontrado na busca');
      }
    } catch (err) {
      res.status(HttpStatus.BAD_GATEWAY).send(err.message);
    }
  }

  
}