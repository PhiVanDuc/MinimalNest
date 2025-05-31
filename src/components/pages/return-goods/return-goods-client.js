"use client"

import { useForm } from "react-hook-form";

import { Form } from "@/components/ui/form";

import ReturnGoodsOrder from "./return-goods-order";
import CustomTable from "@/components/customs/admin/custom-table";
import { Button } from "@/components/ui/button";

import { FaArrowRotateLeft } from "react-icons/fa6";

import columns from "./columns";
import { cn } from "@/lib/utils";

export default function ReturnGoodsClient({
    decode,
    orders = []
}) {
    const form = useForm({
        defaultValues: {
            order: {},
            products: []
        }
    });
    const watchOrder = form.watch("order");
    const selectedOrder = watchOrder?.id;

    const onSubmit = async (data) => {}

    return (
        <section className="space-y-[30px]">
            <header className="space-y-[5px]">
                <h1 className="text-[24px] font-semibold">Trả hàng</h1>
                <p className="text-[14px] md:text-[16px] text-darkBland font-medium">Chúng tôi sẽ phản hồi yêu cầu đổi trả trong tối đa 3 ngày. Mong bạn kiên nhẫn đợi thông báo!</p>
            </header>
            
            <Form {...form}>
                <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className={cn(
                        "",
                        (decode?.success) ? "flex items-start gap-[20px]" : ""
                    )}
                >
                    <ReturnGoodsOrder
                        form={form}
                        orders={orders}
                    />

                    <div className="w-[60%]">
                        {
                            watchOrder?.id ?
                            (
                                <div className="space-y-[30px]">
                                    <div className="flex items-center justify-between">
                                        <p className="w-fit text-[13px] text-white font-medium px-[15px] py-[5px] rounded-full bg-blueChecked">Đơn hàng mã đơn hàng . . .</p>
                                    
                                        <Button
                                            type="button"
                                            variant="ghost"
                                            className="shrink-0 w-fit text-darkMedium font-medium gap-[10px]"
                                            onClick={() => {
                                                form.setValue("order", {})
                                            }}
                                        >
                                            Đổi đơn hàng
                                            <FaArrowRotateLeft size={15} />
                                        </Button>
                                    </div>

                                    <div>
                                        <p className="text-[14px] font-medium text-darkBland text-center">Vui lòng chọn sản phẩm bạn muốn hoàn trả.</p>

                                        <CustomTable
                                            data={[1, 1]}
                                            columns={columns}
                                            enableExpandRow={true}
                                            moreData={{
                                                form
                                            }}
                                        />
                                    </div>
                                </div>
                            ) :
                            <div className="p-[20px] border rounded-[10px]">
                                <p className="text-[15px] text-darkMedium text-center font-medium">Vui lòng chọn đơn hàng để tiếp tục.</p>
                            </div>
                        }

                        {
                            selectedOrder &&
                            (
                                <Button
                                    className="w-full bg-yellowBold hover:bg-yellowBold hover:opacity-90"
                                >
                                    Gửi yêu cầu
                                </Button>
                            )
                        }
                    </div>
                </form>
            </Form>
        </section>
    )
}
