import ProductFilters from "@/components/pages/products/product-filters/product-filters";

export default function ProductLayout({ children }) {
    return (
        <section className="relative pt-[66px] xl:pt-[76px]">
            <ProductFilters />
            {children}
        </section>
    )
}
