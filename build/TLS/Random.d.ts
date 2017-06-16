import * as TLSTypes from "./TLSTypes";
import { TLSStruct } from "./TLSStruct";
export declare class Random extends TLSStruct {
    static readonly __spec: {
        gmt_unix_time: string;
        random_bytes: TLSTypes.Vector;
    };
    constructor();
}