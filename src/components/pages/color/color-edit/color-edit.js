import ColorEditClient from "./color-edit-client";
import Error from "@/components/customs/error";

import { getColor } from "@/lib/api/server-action/color";

export default async function ColorEdit({ params }) {
    const { response, result: color } = await getColor(params?.colorId);

    if (!color?.success) return <Error message={`${response?.status},${color?.message}`} />

    return (
        <ColorEditClient color={color?.data?.color} />
    )
}
