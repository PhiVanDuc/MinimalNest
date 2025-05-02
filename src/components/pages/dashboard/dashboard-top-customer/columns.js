"use client"

const columns = [
    {
        id: "customer",
        accesserKey: "customer",
        header: () => <h3 className="text-[14px] text-darkMedium font-medium">Khách hàng</h3>,
        cell: ({ row }) => {
            return (
                <div className="space-y-[5px]">
                    <h4 className="text-[16px] font-medium">Tên khách hàng.</h4>
                    <p className="text-[14px] text-darkMedium">email@gmail.com</p>
                </div>
            )
        }
    },
    {
        id: "phone-number",
        accesserKey: "phone-number",
        header: () => <h3 className="text-[14px] text-darkMedium font-medium text-center">Số điện thoại</h3>,
        cell: ({ row }) => {
            return (
                <div className="flex justify-center">
                    <p className="text-[15px]">032*****51</p>
                </div>
            )
        }
    },
    {
        id: "order",
        accesserKey: "order",
        header: () => <h3 className="text-[14px] text-darkMedium font-medium text-center">Đơn hàng</h3>,
        cell: ({ row }) => {
            return (
                <div className="flex justify-center">
                    <p className="text-[14px] text-blueChecked font-medium px-[10px] py-[4px] rounded-[5px] bg-blueChecked/20">70</p>
                </div>
            )
        }
    }
];

export default columns;