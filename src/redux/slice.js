import { createSlice } from '@reduxjs/toolkit'
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
    message: "",
    postQuoteLoading: false,
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
            state.message = action.payload.message
            state.address = `${action.payload.unit} ${action.payload.streetAddress} ${action.payload.suburb} ${action.payload.postCode} ${action.payload.state}`
        },
        postQuotePending(state) {
            state.postQuoteLoading = true
        },
        postQuoteSuccess(state) {
            state.service = "",
                state.phone = "",
                state.property = "",
                state.email = "",
                state.fullname = "",
                state.bedroomCount = 0,
                state.bathroomCount = 0,
                state.addOns = [],
                state.address = "",
                state.message = "",
                state.postQuoteLoading = false
        },
        postQuoteFail(state) {
            state.postQuoteLoading = false

        },
        postContactPending(state) {
            state.postQuoteLoading = true
        },
        postContactSuccess(state) {
            state.postQuoteLoading = false

        },
        postContactFail(state) {
            state.postQuoteLoading = false

        },
    },
})

export const { selectedService, addBathCount, addBedCount, addAddOn, propertySelected, removeAddOn, removeBedCount, customerDetails, removeBathCount, postQuotePending, postQuoteSuccess, postQuoteFail,
    postContactPending, postContactSuccess, postContactFail,
} = quoteSlice.actions
export default quoteSlice.reducer