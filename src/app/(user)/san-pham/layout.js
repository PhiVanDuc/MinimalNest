import ProductLayout from "@/components/layouts/user/product-layout";

export default function Layout({ children, modal }) {
    return (
        <ProductLayout>
            {children}
            {modal}
        </ProductLayout>
    )
}
