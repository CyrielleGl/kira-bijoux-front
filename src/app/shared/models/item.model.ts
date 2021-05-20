export interface IItems {
    id?: any;
    item_parent?: IItemParents;
    subtitle?: string;
    description?: string;
    length?: string;
    name?: string;
    price?: number;
    stock?: number;
    visibility?: boolean;
    inserted_at?: Date;
    updated_at?: Date;
    tva?: number;
}

export class Items implements IItems {
    constructor(
        public id?: any,
        public item_parent?: IItemParents,
        public subtitle?: string,
        public description?: string,
        public length?: string,
        public name?: string,
        public price?: number,
        public stock?: number,
        public visibility?: boolean,
        public inserted_at?: Date,
        public updated_at?: Date,
        public tva?: number
    ) {}
}

export interface IItemParents {
    id?: any;
    name?: string;
    item_type?: IItemTypes;
    collection?: ICollections;
    inserted_at?: Date;
    updated_at?: Date;
}

export class ItemParents implements IItemParents {
    constructor(
        public id?: any,
        public name?: string,
        public item_type?: IItemTypes,
        public collection?: ICollections,
        public inserted_at?: Date,
        public updated_at?: Date
    ) {}
}

export interface IItemTypes {
    id?: any;
    name?: string;
    inserted_at?: Date;
    updated_at?: Date;
}

export class ItemTypes implements IItemTypes {
    constructor(
        public id?: any,
        public name?: string,
        public inserted_at?: Date,
        public updated_at?: Date
    ) {}
}

export interface ICollections {
    id?: any;
    name?: string;
    inserted_at?: Date;
    updated_at?: Date;
}

export class Collections implements ICollections {
    constructor(
        public id?: any,
        public name?: string,
        public inserted_at?: Date,
        public updated_at?: Date
    ) {}
}

export interface IItemPictures {
    id?: any;
    item?: IItems;
    name?: string;
    path?: string;
    place?: number;
    inserted_at?: Date;
    updated_at?: Date;
}

export class ItemPictures implements IItemPictures {
    constructor(
        public id?: any,
        public item?: IItems,
        public name?: string,
        public path?: string,
        public place?: number,
        public inserted_at?: Date,
        public updated_at?: Date
    ) {}
}

export interface IMaterials {
    id?: any;
    material_type?: IMaterialTypes;
    name?: string;
    inserted_at?: Date;
    updated_at?: Date;
}

export class Materials implements IMaterials {
    constructor(
        public id?: any,
        public material_type?: IMaterialTypes,
        public name?: string,
        public inserted_at?: Date,
        public updated_at?: Date
    ) {}
}

export interface IMaterialTypes {
    id?: any;
    name?: string;
    inserted_at?: Date;
    updated_at?: Date;
}

export class MaterialTypes implements IMaterialTypes {
    constructor(
        public id?: any,
        public name?: string,
        public inserted_at?: Date,
        public updated_at?: Date
    ) {}
}
