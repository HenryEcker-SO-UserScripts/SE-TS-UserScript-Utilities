import type { IdType } from './Types';
export declare function fetchFullUrlFromUserId(userId: IdType): Promise<string>;
export declare function fetchUserIdFromHref(href: string, convertToNumber: false): undefined | string;
export declare function fetchUserIdFromHref(href: string, convertToNumber?: true): undefined | number;
