import { Params } from "@angular/router";
import { Base } from "./base.interface";

export interface NavElement extends Base {
    route: string
    params?: Params
    icon?: string
}
