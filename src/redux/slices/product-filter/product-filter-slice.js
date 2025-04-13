import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    livingSpaceState: {},
    productNameState: {
        label: "Tên sản phẩm",
        param: "product-name",
        value: ""
    },
    discountState: {
        label: "Giảm giá",
        param: "discount",
        value: false
    },
    typeState: {},
    categoriesState: [],
    priceMinState: {
        label: "Giá tối thiểu",
        param: "price-min",
        value: 0
    },
    priceMaxState: {
        label: "Giá tối đa",
        param: "price-max",
        value: 0
    },
    colorsState: [],
}

const productFilterSlice = createSlice({
    name: "productFilter",
    initialState,
    reducers: {
        // Add
        addLivingSpace: (state, action) => {
            state.livingSpaceState = action.payload;
        },
        
        addProductName: (state, action) => {
            state.productNameState.value = action.payload;
        },

        addDiscount: (state, action) => {
            state.discountState.value = action.payload;
        },

        addType: (state, action) => {
            if (state.typeState?.param === action.payload?.param) state.typeState = {}
            else state.typeState = action.payload;
        },

        addCategories: (state, action) => {
            if (state.categoriesState.length > 0) {
                const deleteIndex = state.categoriesState.findIndex(category => action.payload.param === category?.param);

                if (deleteIndex === -1) state.categoriesState.push(action.payload);
                else state.categoriesState.splice(deleteIndex, 1);
            }
            else state.categoriesState.push(action.payload);
        },

        addPriceMin: (state, action) => {
            state.priceMinState.value = action.payload;
        },

        addPriceMax: (state, action) => {
            state.priceMaxState.value = action.payload;
        },

        addColors: (state, action) => {
            if (state.colorsState.length > 0) {
                const deleteIndex = state.colorsState.findIndex(category => action.payload.param === category?.param);

                if (deleteIndex === -1) state.colorsState.push(action.payload);
                else state.colorsState.splice(deleteIndex, 1);
            }
            else state.colorsState.push(action.payload);
        },

        // Update
        updateInitialState: (state, action) => {
            switch(action.payload?.filter) {
                case "type": {
                    state.typeState = action.payload.data;
                    break;
                }

                case "categories": {
                    state.categoriesState = action.payload.data;
                    break;
                }

                case "colors": {
                    state.colorsState = action.payload.data;
                    break;
                }
            }
        },

        // Delete
        deleteLivingSpace: (state, action) => {
            state.livingSpaceState = "";
        },

        deleteProductName: (state, action) => {
            state.productNameState.value = "";
        },

        deleteDiscount: (state, action) => {
            state.discountState.value = false;
        },

        deleteType: (state, action) => {
            state.typeState = {}
        },

        deleteCategories: (state, action) => {
            const deleteIndex = state.categoriesState.findIndex(category => {
                return category.param === action.payload?.param;
            });

            state.categoriesState.splice(deleteIndex, 1);
        },

        deletePrices: (state, action) => {
            state.priceMinState = {
                label: "Giá tối thiểu",
                param: "price-min",
                value: 0
            };

            state.priceMaxState = {
                label: "Giá tối đa",
                param: "price-max",
                value: 0
            };
        },

        deleteColors: (state, action) => {
            const deleteIndex = state.colorsState.findIndex(color => {
                return color.param === action.payload?.param;
            });

            state.colorsState.splice(deleteIndex, 1);
        }
    }
});

export default productFilterSlice.reducer;
export const {
    addLivingSpace,
    addProductName,
    addDiscount,
    addType,
    addCategories,
    addPriceMin,
    addPriceMax,
    addColors,
    updateInitialState,
    deleteLivingSpace,
    deleteProductName,
    deleteDiscount,
    deleteType,
    deleteCategories,
    deletePrices,
    deleteColors
} = productFilterSlice.actions;