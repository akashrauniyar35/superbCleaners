import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'


interface QuoteState {
    id: number,
    title: string,
    property: string,
    service: string,
    bedroomCount: string,
    bathroomCount: string,
    addOns: Array<[{ id: string, label: string, count: Number }]>
}

const initialState = {
    id: 0,
    title: '',
    service: '',
    property: 'House',
    bedroomCount: '',
    bathroomCount: '',
    addOns: [],
} as QuoteState

const quoteSlice = createSlice({
    name: 'quote',
    initialState,
    reducers: {
        selectedService(state, action: any) {
            state.service = action.payload
        },
        propertySelected(state, action: PayloadAction<string>) {
            state.property = action.payload
        },
        bedroomCount(state, action: PayloadAction<string>) {
            state.bedroomCount = action.payload
        },
        bathroomCount(state, action: PayloadAction<string>) {
            state.bathroomCount = action.payload
        },
        addAddOn(state, action: PayloadAction<any>) {
            state.addOns.push(action.payload)
        },
    },
})

export const { selectedService, bedroomCount, bathroomCount, addAddOn } = quoteSlice.actions
export default quoteSlice.reducer