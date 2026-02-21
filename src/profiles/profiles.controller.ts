import { Controller, Get } from '@nestjs/common';

@Controller('profiles')
export class ProfilesController {
    // GET /profiles

    @Get()
    findAll(){
        return 'This action returns all profiles';
    }
    // GET /profiles/:id
    // POST /profiles
    // PUT /profiles/:id
    // DELETE /profiles/:id
}
