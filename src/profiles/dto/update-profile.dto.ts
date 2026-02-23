import {IsString, Length} from 'class-validator'

export class UpdateProfileDto {
    @IsString() name: string;
    @Length(10, 50) description: string;
}