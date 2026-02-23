import { Injectable, NotFoundException } from '@nestjs/common';
import { randomUUID } from 'crypto';

import type { CreateProfileDto } from './dto/create-profile.dto';
import type { UpdateProfileDto } from './dto/update-profile.dto';

@Injectable()
export class ProfilesService {

    private profiles = [
        {
            id: randomUUID(),
            name: "Kopano Sekonyela",
            description: "Handsome Developer"
        },
        {
            id: randomUUID(),
            name: "Seithat Sekonyela",
            description: "Sister"
        },
        {
            id: randomUUID(),
            name: "Kairo Sekonyela",
            description: "Brother"
        }
    ];

    findAll() {
        return this.profiles;
    }

    findOne(id: string) {
        const matchingProfile = this.profiles.find((profile) => profile.id === id);

        if (!matchingProfile) {
            throw new NotFoundException(`Profile with ID ${id} Not Found.`);
        }
        return matchingProfile;
    }

    create(createProfileDto: CreateProfileDto) {
        const newProfile = {
            id: randomUUID(),
            ...createProfileDto
        }
        this.profiles.push(newProfile);
        return newProfile;
    }

    update(id: string, updateProfileDto: UpdateProfileDto) {
        const profileMatch = this.profiles.find((profile) => profile.id === id)

        if (!profileMatch) {
             throw new NotFoundException(`Profile with ID ${id} Not Found.`);
        }

        profileMatch.name = updateProfileDto.name;
        profileMatch.description = updateProfileDto.description;
        return this.profiles.find((profile) => profile.id === id);
    }

    delete(id: string) :void {
        const profileIndex = this.profiles.findIndex((profile) => profile.id === id)

        if (profileIndex === -1) {
            throw new NotFoundException(`Profile with ID ${id} Not Found.`);
        }

        this.profiles.splice(profileIndex, 1); // remove the object in this array position

    }
}
