"use client"

import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";

import { RiFileExcel2Fill } from "react-icons/ri";

import { toast } from "sonner";
import { addProductsExcel } from "@/lib/api/server-action/product";

export default function AdminProductButtonExcel() {
    const inputRef = useRef(null);

    const [file, setFile] = useState(null);
    const [submitting, setSubmitting] = useState(false);

    const handleOpenExplorer = () => {
        inputRef.current?.click();
    };

    const handleUploadFile = async () => {
        if (submitting) return;
        setSubmitting(true);

        const formData = new FormData();
        formData.append("excel", file);

        const uploadFile = await addProductsExcel(formData);
        const message = uploadFile?.message;

        if (uploadFile?.success) toast.success(message);
        else toast.error(message);

        setSubmitting(false);
    }

    return (
        <div className="p-[20px] rounded-[10px] bg-white space-y-[20px]">
            <header className="space-y-[2px]">
                <h2 className="text-[18px] font-semibold">Thêm sản phẩm với Excel</h2>
                <p className="text-[14px] font-medium text-darkBland">Bạn chỉ có thể chọn 1 file excel cùng 1 lúc.</p>
            </header>

            <div className="space-y-[10px]">
                <div
                    className="flex items-stretch gap-[10px]"
                    onClick={handleOpenExplorer}
                >
                    <div className="relative flex items-center pl-[50px] pr-[15px] w-full self-stretch bg-neutral-100 rounded-[5px] border cursor-pointer">
                        <RiFileExcel2Fill
                            size={20}
                            className="absolute left-[15px] top-[50%] translate-y-[-50%] text-neutral-400"
                        />

                        {
                            file ?
                            <p className="text-[14px] font-medium">{file.name}</p> :
                            <p className="text-[14px] font-medium text-darkBland">Vui lòng chọn tệp tin excel.</p>
                        }
                    </div>

                    <div>
                        <input
                            ref={inputRef}
                            type="file"
                            accept=".xlsx,.xls"
                            className="hidden"
                            onChange={(e) => {
                                const files = e.target.files;
                                const oneFile = Array.from(files)[0];

                                setFile(oneFile || null);
                                e.target.value = "";
                            }}
                        />

                        <Button variant="outline">
                            Chọn tệp tin Excel
                        </Button>
                    </div>
                </div>

                {
                    file &&
                    (
                        <div className="flex gap-[5px]">
                            <Button
                                onClick={handleUploadFile}
                                className="bg-yellowBold hover:bg-yellowBold text-white"
                                disabled={submitting}
                            >
                                {
                                    submitting ? "Đang tải tệp tin . . ." : "Tải tệp tin lên"
                                }
                            </Button>
                            
                            <Button
                                variant="outline"
                                onClick={() => { setFile(null) }}
                                disabled={submitting}
                            >
                                Hủy
                            </Button>
                        </div>
                    )
                }
            </div>
        </div>
    );
}