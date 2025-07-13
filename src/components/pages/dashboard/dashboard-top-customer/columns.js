"use client"

const columns = [
    {
        id: "customer",
        accesserKey: "customer",
        header: () => <h3 className="text-[14px] text-darkMedium font-medium">Khách hàng</h3>,
        cell: ({ row }) => {
            const data = row?.original;

            return (
                <h4 className="text-[16px] font-medium">{data?.full_name}</h4>
            )
        }
    },
    {
        id: "email",
        accesserKey: "email",
        header: () => <h3 className="text-[14px] text-darkMedium font-medium">Email</h3>,
        cell: ({ row }) => {
            const data = row?.original;

            return (
                <p className="text-[14px] font-medium text-darkMedium">{data?.email}</p>
            )
        }
    },
    {
        id: "order",
        accesserKey: "order",
        header: () => <h3 className="text-[14px] text-darkMedium font-medium text-center">Đơn hàng</h3>,
        cell: ({ row }) => {
            const data = row?.original;

            return (
                <div className="flex justify-center">
                    <p className="text-[14px] text-blueChecked font-medium px-[10px] py-[4px] rounded-[5px] bg-blueChecked/20">{data?.order_count}</p>
                </div>
            )
        }
    }
];

export default columns;