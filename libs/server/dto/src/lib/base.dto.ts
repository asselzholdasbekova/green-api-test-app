import BaseEntity from "@app/server/entities/lib/base.entity";

export class BaseDto implements BaseEntity {
    readonly id: number;

    readonly createdAt?: Date;

    readonly updatedAt?: Date;
}