import { Controller, Get, Query, Param, Post, Body, Put } from '@nestjs/common';
import { CreateProfileDto } from './dto/create-profile.dto';
import { UpdateProfileDto } from './dto/update-profile.dto';
@Controller('profiles')
export class ProfilesController {
    // GET /profiles

    @Get()
    findAll(@Query('location') location: string) {
        return [{ location }];
    }
    // GET /profiles/:id

    @Get(':id')
    findOne(@Param('id') id: string) {
        return { id };
    }

    // POST /profiles
    @Post()
    create(@Body() createProfileDto: CreateProfileDto) {

        return {
            name: createProfileDto.name,
            description: createProfileDto.description
        };
    }
    // PUT /profiles/:id
    @Put(':id')
    update(@Body() updateProfileDto: UpdateProfileDto, @Param('id') id: string) {
        return {
            id: id,
            name: updateProfileDto.name,
            description: updateProfileDto.description
        };
    }

    // DELETE /profiles/:id
}
