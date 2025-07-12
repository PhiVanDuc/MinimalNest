import RoleEdit from "@/components/pages/role/role-edit/role-edit";

export default function Page({ params }) {
    return (
        <RoleEdit slug={params?.slug} />
    )
}
