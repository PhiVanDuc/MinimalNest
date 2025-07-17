import UserLayout from "@/components/layouts/user/user-layout";

export default function Layout({ children }) {
    return (
        <UserLayout isOverflow={true}>
            {children}
        </UserLayout>
    )
}
