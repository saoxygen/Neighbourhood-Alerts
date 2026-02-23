import { Controller, Get, Query, Param, Post, Body, Put, Delete, HttpCode, HttpStatus, ParseUUIDPipe, UseGuards } from '@nestjs/common';
// import DTOS
import { CreateProfileDto } from './dto/create-profile.dto';
import { UpdateProfileDto } from './dto/update-profile.dto';
// import services
import { ProfilesService } from './profiles.service';
import type { UUID } from 'crypto';
import { ProfilesGuard } from './profiles.guard';

@Controller('profiles')
export class ProfilesController {

    constructor(private profilesServices: ProfilesService) { }

    // GET /profiles

    @Get()
    findAll() {
        return this.profilesServices.findAll();
    }
    // GET /profiles/:id

    @Get(':id')
    findOne(@Param('id', ParseUUIDPipe) id: UUID) {
        return this.profilesServices.findOne(id);
    }

    // POST /profiles
    @Post()
    create(@Body() createProfileDto: CreateProfileDto) {
        return this.profilesServices.create(createProfileDto);
    }

    // PUT /profiles/:id
    @Put(':id')
    update(@Body() updateProfileDto: UpdateProfileDto,
        @Param('id', ParseUUIDPipe) id: UUID) {
        return this.profilesServices.update(id, updateProfileDto);
    }

    // DELETE /profiles/:id
    @Delete(':id')
    @UseGuards(ProfilesGuard)
    @HttpCode(HttpStatus.NO_CONTENT)
    remove(@Param('id', ParseUUIDPipe) id: UUID) {
       this.profilesServices.delete(id);
    }
}
