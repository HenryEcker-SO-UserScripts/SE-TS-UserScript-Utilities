import { type ControllerDefinition } from '@stackoverflow/stacks';
export type IdType = number | string;
export interface BaseStacksControllerConfig extends ControllerDefinition {
    targets?: string[];
    initialize?: () => void;
    connect?: () => void;
    disconnect?: () => void;
}
