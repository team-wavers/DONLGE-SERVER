import { Module } from '@nestjs/common';
import { V1Controller } from './v1.controller';
import { ClubReportsModule } from './club_reports/club_reports.module';
import { ClubsModule } from './clubs/clubs.module';
import { UsersModule } from './users/users.module';

@Module({
    imports: [ClubReportsModule, ClubsModule, UsersModule],
    controllers: [V1Controller],
})
export class V1Module {}
