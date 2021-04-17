import { IItems } from './item.model';
import { IAddress } from './user.model';

export interface IOrder {
    id?: any;
    status?: IOrderStatus;
    user_address?: IAddress[];
    paiement_type_id?: bigint;
    price?: number;
    inserted_at?: Date;
    updated_at?: Date;
    send_at?: Date;
    received_at?: Date;
}

export class Order implements IOrder {
    constructor(
        public id?: any,
        public status?: IOrderStatus,
        public user_address?: IAddress[],
        public paiement_type_id?: bigint,
        public price?: number,
        public inserted_at?: Date,
        public updated_at?: Date,
        public send_at?: Date,
        public received_at?: Date
    ) {}
}

export interface IOrderStatus {
    id?: any;
    name?: string;
    inserted_at?: Date;
    updated_at?: Date;
}

export class OrderStatus implements IOrderStatus {
    constructor(
        public id?: any,
        public name?: string,
        public inserted_at?: Date,
        public updated_at?: Date
    ) {}
}

export interface IOrderItems {
    id?: any;
    order?: IOrder;
    item?: IItems;
    quantity?: number;
    inserted_at?: Date;
    updated_at?: Date;
}

export class OrderItems implements IOrderItems {
    constructor(
        public id?: any,
        public order?: IOrder,
        public item?: IItems,
        public quantity?: number,
        public inserted_at?: Date,
        public updated_at?: Date
    ) {}
}
