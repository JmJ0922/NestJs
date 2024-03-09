import {MinLength,IsEnum} from 'class-validator';

export class CreateApiDto {
    @MinLength(3)
    name:string;

    @IsEnum(['stars', 'nunchucks'],{message:'Use correct weapon'})
    weapon:'stars' | 'nunchucks';
}
