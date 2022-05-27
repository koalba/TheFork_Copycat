export interface IResponse {
    data: IData,
    msj?: string
}

export interface IData {
    restaurantes?: IDatum[],
    offers?:       IDatum[],
    city?:         IDatum[],
    sliders?:      IDatum[],
}

export interface IButton {
    href   : string,
    title? : string
}

export interface IDirection {
    street:  string,
    cp:      string,
    city:    string,
    country: string,
}

export interface IOffers {
    offer: number,
    yums:  boolean,
}

export interface ISpecs {
    insider:   boolean,
    dyums:     boolean,
    pay:       boolean,
    michelin?: boolean,
}

export interface ISlider {
    titulo:   string,
    type:     string,
    visibles: number,
    data:     IDatum[],
    items?:   string,
    more?:    boolean,
    city?:    string,
}

export interface IDatum {
    id:           string,
    nombre:       string,
    src:          string,
    descripcion?: string,
    button:       IButton,
    slider?:      string[],
    tags?:        string[],
    nota?:        number,
    popular?:     boolean,
    festival?:    boolean,
    specs?:       ISpecs,
    offers?:      IOffers,
    medPrice?:    number,
    direction?:   IDirection,
    country?:     string,
}
