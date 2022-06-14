import { Params } from "@angular/router";
import { Base } from "./base.interface";

export interface NavElement extends Base {
    route: string
    routerLinkExact?: boolean,
    activeClass: string,
    params?: Params
    icon?: string
    children?: NavElement[]
}
