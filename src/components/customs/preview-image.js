import { cn } from "@/lib/utils";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function PreviewImage({ file, alt = "", className }) {
    const [previewUrl, setPreviewUrl] = useState(null);

    useEffect(() => {
        if (!file) return;
        const objectUrl = URL.createObjectURL(file);
        setPreviewUrl(objectUrl);

        return () => URL.revokeObjectURL(objectUrl);
    }, [file]);

    if (!previewUrl) return null;

    return (
        <div className={cn(
            "relative w-full rounded-[10px] overflow-hidden",
            className
        )}>
            <Image
                src={previewUrl}
                alt={alt}
                fill
                className="object-cover object-center"
                placeholder="blur"
                blurDataURL={previewUrl}
                draggable={false}
            />
        </div>
    );
}