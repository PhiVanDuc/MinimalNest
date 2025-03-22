import UserSidebarLayout from "@/components/layouts/user/user-sidebar-layout";
import ProductFilter from "@/components/pages/products/filter/product-filter";
import ProductFilterLoading from "@/components/pages/products/filter/product-filter-loading";

export default function Layout({ children }) {
    return (
        <UserSidebarLayout
            sidebar={<ProductFilter />}
            sidebarLoading={<ProductFilterLoading />}
        >
            {children}
        </UserSidebarLayout>
    )
}
