import { createSlice } from '@reduxjs/toolkit'
import { MdYard } from 'react-icons/md'



const initialState = {
    service: '',
    property: '',
    fullname: "",
    address: "",
    email: "",
    phone: "",
    bedroomCount: 0,
    bathroomCount: 0,
    addOns: [],
    message: ""
}






const quoteSlice = createSlice({
    name: 'quote',
    initialState,
    reducers: {
        selectedService(state, action) {
            state.service = action.payload
        },
        propertySelected(state, action) {
            state.property = action.payload
        },
        addBedCount(state, action) {
            console.log(action.payload)
            state.bedroomCount = action.payload + 1
        },
        removeBedCount(state, action) {
            state.bedroomCount = action.payload - 1
        },
        addBathCount(state, action) {
            state.bathroomCount = action.payload + 1
        },
        removeBathCount(state, action) {
            state.bathroomCount = action.payload - 1
        },
        addAddOn(state, action) {
            state.addOns = action.payload
        },

        removeAddOn(state, action) {
            state.addOns = action.payload
        },

        customerDetails(state, action) {
            state.fullname = action.payload.name
            state.email = action.payload.email
            state.phone = action.payload.phone
            state.address = `${action.payload.unit} ${action.payload.streetAddress} ${action.payload.suburb} ${action.payload.postCode} ${action.payload.state}`
        },
    },
})

export const { selectedService, addBathCount, addBedCount, addAddOn, propertySelected, removeAddOn, removeBedCount, customerDetails, removeBathCount } = quoteSlice.actions
export default quoteSlice.reducer