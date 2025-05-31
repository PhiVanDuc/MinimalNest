"use client"

import { useForm } from "react-hook-form";
import { Form } from "@/components/ui/form";

import CustomTable from "@/components/customs/admin/custom-table";
import columns from "./columns";
import { Button } from "@/components/ui/button";

export default function ConsiderForm() {
    const form = useForm({
        defaultValues: {}
    });

    return (
        <Form {...form} >
            <form className="w-[65%] p-[20px] rounded-[10px] bg-white">
                <CustomTable
                    data={[1, 1]}
                    columns={columns}
                    enableExpandRow={true}
                    moreData={{ form }}
                />

                <Button className="w-full">Phản hồi khách hàng</Button>
            </form>
        </Form>
    )
}
