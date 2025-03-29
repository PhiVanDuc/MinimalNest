import { getPlaiceholder } from 'plaiceholder';

export const dynamicBlurImage = async (src) => {
    const buffer = await fetch(src).then(async (res) => {
        return Buffer.from(await res.arrayBuffer());
    });
      
    const {
        metadata: { height, width },
        ...plaiceholder
    } = await getPlaiceholder(buffer, { size: 10 });

    return {
        ...plaiceholder,
        img: { src, height, width }
    }
}
