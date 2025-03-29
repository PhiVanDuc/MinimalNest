"use server"

import { dynamicBlurImage } from "@/lib/dynamic-blur-image";
import { v4 } from "uuid";

const FAKE_API = process.env.FAKE_API;

const getProducts = async () => {
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

        // Thêm placeholder cho ảnh với key là blurImage
        const newData = Promise.all(response.map(async (item) => {
            const blurImage = await dynamicBlurImage(item.image);
            item["id"] = v4();
            item["blurImage"] = blurImage;

            return item;
        }));

        return newData;
    }
    catch(error) {
        console.log(error);
        return false;
    }
}

export default getProducts;