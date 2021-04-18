import { IAddress } from './address.model';

export interface IRole {
    id?: any;
    role?: string;
    inserted_at?: Date;
    updated_at?: Date;
}

export class Role implements IRole {
    constructor(
        public id?: any,
        public role?: string,
        public inserted_at?: Date,
        public updated_at?: Date
    ) {}
}

export interface IUser {
    id?: any;
    firstname?: string;
    lastname?: string;
    mail?: string;
    password?: string;
    phone?: string;
    inserted_at?: Date;
    updated_at?: Date;
    addresses?: IAddress[];
    role?: IRole;
}

export class User implements IUser {
    constructor(
        public id?: any,
        public firstname?: string,
        public lastname?: string,
        public mail?: string,
        public password?: string,
        public phone?: string,
        public inserted_at?: Date,
        public updated_at?: Date,
        public addresses?: IAddress[],
        public role?: IRole
    ) {}
}
