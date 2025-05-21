const convertImageToWebp = (file) => {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = (event) => {
            const img = new Image();
            img.onload = () => {
                const canvas = document.createElement("canvas");
                const ctx = canvas.getContext("2d");
                
                // Tính toán kích thước mới (giữ tỷ lệ)
                const maxDimension = 2000;
                let width = img.width;
                let height = img.height;
                
                if (width > height && width > maxDimension) {
                    height *= maxDimension / width;
                    width = maxDimension;
                } else if (height > maxDimension) {
                    width *= maxDimension / height;
                    height = maxDimension;
                }
                
                canvas.width = width;
                canvas.height = height;
                
                // Vẽ ảnh đã resize
                ctx.drawImage(img, 0, 0, width, height);
                
                // Chuyển đổi sang WebP với chất lượng 80%
                canvas.toBlob(
                    (blob) => {
                        const newReader = new FileReader();
                        newReader.onload = () => resolve(newReader.result);
                        newReader.onerror = reject;
                        newReader.readAsDataURL(blob);
                    },
                    "image/webp",
                    0.8
                );
            };
            img.onerror = reject;
            img.src = event.target.result;
        };
        reader.onerror = reject;
        reader.readAsDataURL(file);
    });
};

export default convertImageToWebp;