"use server"

import { dynamicBlurImage } from "@/lib/dynamic-blur-image";
import { v4 } from "uuid";

const FAKE_API = process.env.FAKE_API;

const getProducts = async (maxItem = 20) => {
    try {
        const request = await fetch(
            `${FAKE_API}/products`,
            {
                cache: "no-cache"
            }
        );
        
        if (!request.ok) {
            console.log(request);
            return false;
        }
        
        const response = await request.json();
        const limitedProducts = response?.products.slice(0, maxItem - 1);

        // Thêm placeholder cho ảnh với key là blurImage
        const newData = await Promise.all(limitedProducts.map(async (item) => {
            const blurImage = await dynamicBlurImage(item.images[0]);

            item["blurImage"] = {
                base64: blurImage.base64,
                img: blurImage.img
            };

            return {
                id: v4(),
                blurImage: item["blurImage"]
            };
        }));
        
        return newData;
    }
    catch(error) {
        console.log(error);
        return false;
    }
}

export default getProducts;