export interface IAddress {
    id?: any;
    name?: string;
    recipient?: string;
    first_line?: string;
    second_line?: string;
    post_code?: string;
    town?: string;
    inserted_at?: Date;
    updated_at?: Date;
}

export class Address implements IAddress {
    constructor(
        public id?: any,
        public name?: string,
        public recipient?: string,
        public first_line?: string,
        public second_line?: string,
        public post_code?: string,
        public town?: string,
        public inserted_at?: Date,
        public updated_at?: Date
    ) {}
}
