import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'


// interface QuoteState {
//     id: number,
//     title: string,
//     property: string,
//     contactDetails: { customerName: string, emial: string, phone: Number, streetAddress: string, unit: Number, postCode: Number, suburb: string, }
//     service: string,
//     bedroomCount: Number,
//     bathroomCount: Number,
//     addOns: Array<[{ id: string, label: string, count: Number }]>
// }

const initialState = {
    id: 0,
    title: '',
    service: '',
    property: 'House',
    bedroomCount: 0,
    bathroomCount: 0,
    addOns: [],
    contactDetails: []
}

const quoteSlice = createSlice({
    name: 'quote',
    initialState,
    reducers: {
        selectedService(state, action: any) {
            state.service = action.payload
        },
        propertySelected(state, action) {
            state.property = action.payload
        },
        addBedCount(state, action) {
            console.log(action.payload)
            state.bedroomCount = action.payload
        },
        removeBedCount(state, action) {
            state.bedroomCount = action.payload
        },
        addBathCount(state, action) {
            state.bathroomCount = action.payload
        },
        addAddOn(state, action: any) {
            console.log(action)
            // state.addOns.push(action.payload)
            // const itemIndex = state.addOns.findIndex(action.payload)
        },
        customerName(state, action) {
            console.log('s', state.contactDetails)

        },
        customerDetails(state, action) {
            console.log(action)
            // state.contactDetails.push(action.payload)
            // const itemIndex = state.addOns.findIndex(action.payload)
        },

    },
})

export const { selectedService, addBathCount, addBedCount, addAddOn, propertySelected, removeBedCount, customerDetails, customerName } = quoteSlice.actions
export default quoteSlice.reducer