import { SERVICE_SELECTED, PROPERTY_SELECTED } from './actionTypes';

export function serviceSelected() {
    return {
        type: SERVICE_SELECTED
    };
}
export function propertySelected() {
    return {
        type: PROPERTY_SELECTED
    };
}