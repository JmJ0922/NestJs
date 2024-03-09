import { Body, Controller,Delete,Get,Param,Post, Put, Query } from '@nestjs/common';
import { CreateApiDto } from './dto/create-api.dto';
import { UpdateApiDto } from './dto/update-api.dto';

@Controller('apis')
export class ApisController {

//GET /apis?type=fast --> []
@Get()
getApis(@Query('type') type: string){
    return [{ type }];
}
//GET /apis/:id --> {...}
@Get(':id')
getOneApi(@Param('id') id: string){
    return {
        id,
    };
}
//POST /apis
@Post()
createApi(@Body() createApiDta: CreateApiDto){
    return {
        name: createApiDta.name,
    };
}
//PUT /apis/:id --> {...}
@Put(':id')
updateApi(@Param('id') id: string, @Body() UpdateApiDto: UpdateApiDto){
    return {
        id,
        name:UpdateApiDto,
    };
}
//DELETE /apis/:id
@Delete(':id')
removeApi(@Param('id') id: string){
    return {};
}

}