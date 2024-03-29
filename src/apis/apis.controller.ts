import { Body, Controller,Delete,Get,NotFoundException,Param,ParseIntPipe,Post, Put, Query, UseGuards, ValidationPipe } from '@nestjs/common';
import { CreateApiDto } from './dto/create-api.dto';
import { UpdateApiDto } from './dto/update-api.dto';
import { ApisService } from './apis.service';
import { BeltGuard } from 'src/belt/belt.guard';

// const service = new ApisService();
// const controller = new ApisController(service);

@Controller('apis')
// @UseGuards(BeltGuard) //we can use this either in whole controller..or in individual methods
export class ApisController {
    constructor(private readonly apisService:ApisService){}

//GET /apis?weapon=fast --> []
@Get()
getApis(@Query('weapon') weapon: 'stars'|'nunchucks'){
    // const service = new ApisService();
    return this.apisService.getNinjas(weapon);
}
//GET /apis/:id --> {...}
@Get(':id')
getOneApi(@Param('id',ParseIntPipe) id: number){
    try{
        return this.apisService.getNinja(id)
    }catch(err){
        throw new NotFoundException();
    }
}
//POST /apis
@Post()
@UseGuards(BeltGuard) 
createApi(@Body(new ValidationPipe()) createApiDto: CreateApiDto){
    return this.apisService.createNinja(createApiDto);
}
//PUT /apis/:id --> {...}
@Put(':id')
updateApi(@Param('id') id: string, @Body() updateApiDto: UpdateApiDto){
    return this.apisService.updateNinja(+id, updateApiDto);
}
//DELETE /apis/:id
@Delete(':id')
removeApi(@Param('id') id: string){
    return this.apisService.removeNinja(+id);
}

}