"use client"

import { useEffect } from "react";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { useDispatch } from "react-redux";

import _ from "lodash";
import { livingSpaces } from "@/static/navbar";
import {
    addDiscount,
    addLivingSpace,
    addPriceMax,
    addPriceMin,
    addProductName,
    updateInitialState
} from "@/redux/slices/product-filter/product-filter-slice";
import { types, categories, colors } from "@/static/product-filter";

export default function ProductFilterWrapper({ children }) {
    const searchParams = useSearchParams();
    
    const dispatch = useDispatch();

    useEffect(() => {
        const params = Object.fromEntries(searchParams.entries());

        for (const key in params) {
            switch(key) {
                case "living-space": {
                    const index = livingSpaces.findIndex(livingSpace => livingSpace.param === params[key]);
                    if (index !== -1) dispatch(addLivingSpace(livingSpaces[index])) 
                    break;
                }

                case "product-name": {
                    dispatch(addProductName(params[key]));
                    break;
                }

                case "discount": {
                    dispatch(addDiscount(params[key]));
                    break;
                }

                case "type": {
                    const index = types.findIndex(type => type.param === params[key]);
                    if (index !== -1) dispatch(updateInitialState({ filter: "type", data: types[index] })) 
                    break;
                }

                case "categories": {
                    const values = params[key].split(",");
                    const array = values.reduce((prev, curr) => {
                        const index = categories.findIndex(category => category.param === curr);
                        if (index !== -1) {
                            prev.push(categories[index]);
                            return prev;
                        }
                    }, []);

                    dispatch(updateInitialState({ filter: "categories", data: array }));
                    break;
                }

                case "price-min": {
                    dispatch(addPriceMin(params[key]));
                    break;
                }

                case "price-max": {
                    dispatch(addPriceMax(params[key]));
                    break;
                }

                case "colors": {
                    const values = params[key].split(",");
                    const array = values.reduce((prev, curr) => {
                        const index = colors.findIndex(color => color.param === curr);
                        if (index !== -1) {
                            prev.push(colors[index]);
                            return prev;
                        }
                    }, []);

                    dispatch(updateInitialState({ filter: "colors", data: array }));
                    break;
                }
            }
        }
    }, [searchParams, dispatch]);
    
    return (
        <>{children}</>
    )
}