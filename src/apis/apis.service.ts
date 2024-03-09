import { Injectable } from '@nestjs/common';
import { CreateApiDto } from './dto/create-api.dto';
import { UpdateApiDto } from './dto/update-api.dto';

@Injectable()
export class ApisService {
    private ninjas = [
        {id:0, name:'ninjaA',weapon:'stars'},
        {id:1, name:'ninjaB', weapon:'nunchucks'},
    ];

    getNinjas(weapon?:'stars'|'nunchucks'){
        if(weapon){
            return this.ninjas.filter((ninja)=>ninja.weapon === weapon);
        }
        return this.ninjas;
    }

    getNinja(id:number){
        const ninja = this.ninjas.find((ninja)=> ninja.id===id);

        if(!ninja){
            throw new Error('ninja not found');
        }
        return ninja;
    }

    createNinja(createApiDto:CreateApiDto){
        const newNinja = {
            ...createApiDto,
            id: Date.now(),
        };
        this.ninjas.push(newNinja);
        return newNinja
    }

    updateNinja(id: number, updateApiDto:UpdateApiDto){
        this.ninjas = this.ninjas.map((ninja)=>{
            if(ninja.id===id){
                return {...ninja, ...updateApiDto};
            }
            return ninja;
        })
        return this.getNinja(id);
    }

    removeNinja(id: number){
        const toBeRemoved = this.getNinja(id);

        this.ninjas=this.ninjas.filter((ninja)=>ninja.id != id);
        
        return toBeRemoved;
    }

}
