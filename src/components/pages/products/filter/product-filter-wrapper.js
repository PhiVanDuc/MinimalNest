"use client"

import { useEffect } from "react";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { useDispatch } from "react-redux";

import _ from "lodash";
import {
    addDiscount,
    addLivingSpace,
    addPriceMax,
    addPriceMin,
    addProductName,
    updateInitialState
} from "@/redux/slices/product-filter/product-filter-slice";

export default function ProductFilterWrapper({
    children,
    productTypes,
    categories,
    colors,
    livingSpaces
}) {
    const searchParams = useSearchParams();
    
    const dispatch = useDispatch();

    useEffect(() => {
        const params = Object.fromEntries(searchParams.entries());

        for (const key in params) {
            switch(key) {
                case "living-space": {
                    const formatLivingSpaces = livingSpaces.map(livingSpace => {
                        return {
                            id: livingSpace?.id,
                            label: livingSpace?.living_space,
                            param: livingSpace?.param
                        }
                    });

                    formatLivingSpaces.push({
                        id: "Living-space-all-id",
                        label: "Tất cả",
                        param: "all"
                    });

                    const index = formatLivingSpaces.findIndex(livingSpace => livingSpace?.param === params[key]);
                    if (index !== -1) dispatch(addLivingSpace(livingSpaces[index]));
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
                    const index = productTypes.findIndex(type => type.slug === params[key]);
                    if (index !== -1) {
                        dispatch(
                            updateInitialState(
                                {
                                    filter: "type",
                                    data: {
                                        id: productTypes[index]?.id,
                                        label: productTypes[index]?.product_type,
                                        param: productTypes[index]?.slug
                                    }
                                }
                            )
                        ) 
                    }
                    break;
                }

                case "categories": {
                    const values = params[key].split(",");
                    const array = values.reduce((prev, curr) => {
                        const index = categories.findIndex(category => category.slug === curr);

                        if (index !== -1) {
                            prev.push({
                                id: categories[index]?.id,
                                label: categories[index]?.category,
                                param: categories[index]?.slug
                            });
                            return prev;
                        }
                        return prev;
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
                        const index = colors.findIndex(color => color.slug === curr);

                        if (index !== -1) {
                            prev.push({
                                id: colors[index]?.id,
                                label: colors[index]?.color,
                                param: colors[index]?.slug,
                                colorCode: colors[index]?.code
                            });
                            return prev;
                        }
                        return prev;
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