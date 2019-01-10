interface CssModule {
    [className: string]: string;
}
declare module "*.scss" {
    const Styles: CssModule;
    export = Styles;
}

declare module "*.png" {
    const value: any;
    export = value;
}
declare module "is-integer" {
    const value: any;
    export = value;
}

declare module "is-promise" {
    const value: any;
    export = value;
}
