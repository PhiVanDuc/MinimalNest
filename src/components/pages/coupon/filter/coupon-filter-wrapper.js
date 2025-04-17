"use client"

import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "next/navigation";

import { types, events, discountTypes, userTypes } from "@/static/coupon-filter";
import { updateInitialState } from "@/redux/slices/coupon-filter/coupon-filter-slice";

export default function CouponFilterWrapper({ children }) {
    const searchParams = useSearchParams();

    const dispatch = useDispatch();

    useEffect(() => {
        const params = Object.fromEntries(searchParams.entries());

        for (const key in params) {
            switch(key) {
                case "type": {
                    const index = types.findIndex(type => type.param === params[key]);
                    if (index !== -1) dispatch(updateInitialState({ filter: "type", data: types[index] })) 
                    break;
                }
                case "events": {
                    const values = params[key].split(",");
                    const array = values.reduce((prev, curr) => {
                        const index = events.findIndex(event => event.param === curr);
                        if (index !== -1) {
                            prev.push(events[index]);
                            return prev;
                        }
                    }, []);

                    dispatch(updateInitialState({ filter: "events", data: array }));
                    break;
                }
                case "discountType": {
                    const index = discountTypes.findIndex(discountType => discountType.param === params[key]);
                    if (index !== -1) dispatch(updateInitialState({ filter: "discountType", data: discountTypes[index] })) 
                    break;
                }
                case "userTypes": {
                    const values = params[key].split(",");
                    const array = values.reduce((prev, curr) => {
                        const index = userTypes.findIndex(userType => userType.param === curr);
                        if (index !== -1) {
                            prev.push(userTypes[index]);
                            return prev;
                        }
                    }, []);

                    dispatch(updateInitialState({ filter: "userTypes", data: array }));
                    break;
                }
            }
        }
    }, [searchParams, dispatch]);
    
    return (
        <>{children}</>
    )
}