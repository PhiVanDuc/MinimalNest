import ProductFilter from "@/components/pages/products/filter/product-filter"

export default function ProductLayout({ children }) {
    return (
        <div className="pt-[66px] xl:pt-[76px] ">
            <ProductFilter />
            {children}
        </div>
    )
}