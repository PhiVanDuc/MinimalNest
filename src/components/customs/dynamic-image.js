import Image from "next/image";
import { dynamicBlurImage } from "@/lib/dynamic-blur-image";

export default async function DynamicImage({ src = "", alt, className = "" }) {
    const blur = await dynamicBlurImage(src);    

    return (
        <Image
            src={blur?.img?.src}
            alt={alt}
            width={blur.img.width}
            height={blur.img.height}
            className={className}
            placeholder="blur"
            blurDataURL={blur?.base64}
        />
    )
}