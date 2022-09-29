import { createSlice } from '@reduxjs/toolkit'
import { MdYard } from 'react-icons/md'



const initialState = {
    id: 0,
    title: '',
    service: '',
    property: '',
    bedroomCount: 0,
    bathroomCount: 0,
    addOns: [],
    contactDetails: ''
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
            state.bedroomCount = action.payload
        },
        removeBedCount(state, action) {
            state.bedroomCount = action.payload
        },
        addBathCount(state, action) {
            state.bathroomCount = action.payload
        },
        addAddOn(state, action) {


            state.addOns.length < 20 && state.addOns.push(action.payload)
            state.addOns?.map(item => item.id === action.payload.id ? state.addOns.push(...state.addOns, action.payload) : state.addOns.splice(...state.addOns, item))
            
8371
// let existed_item = state.addOns.map(item => item.id === action.payload.id ? action.payload : state.addOns.splice(item))

            // state.addOns.length === 0 ? state.addOns.push(action.payload) : state.addOns.
            //     map(item => item.id === action.payload.id ? state.addOns?.push({ ...item, count: action.payload.count }) : state.addOns.push(action.pay))






            // let addedItem = state.addOns.find(item => item.id === action.payload.id)

            // state.addOns.push(action.payload);
            // let existed_item = state.addOns?.find(item => action.payload.id === item.id ? 0 : 1)

            // let existed_item = state.addOns?.map(item => item.id === action.payload.id ? addOns.splice(item) : state.addOns?.push(action.payload))
            // console.log('Existed item', existed_item)
            // state.addOns.length === 0 && state.addOns.push(action.payload);
            // const exist = state.addOns.find(x => x.id === action.payload.id);
            // if (exist) {
            //     state.addOns.push(state.addOns.map(y => y.id === action.payload.id ? { ...exist, count: action.payload.count } : y))
            // } else {
            //     state.addOns.push(action.payload)
            // }




        },


        removeAddOn(state, action) {
            // state.addOns.push(action.payload)
        },
        customerName(state, action) {
            // console.log('s', state.contactDetails)

        },
        customerDetails(state, action) {
            console.log(action)
            // state.contactDetails.push(action.payload)
            // const itemIndex = state.addOns.findIndex(action.payload)
        },

    },
})

export const { selectedService, addBathCount, addBedCount, addAddOn, propertySelected, removeAddOn, removeBedCount, customerDetails, customerName } = quoteSlice.actions
export default quoteSlice.reducer