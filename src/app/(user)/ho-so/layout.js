import ProfileOptions from "@/components/pages/profile/profile-options";

export default function Layout({ children }) {
    return (
        <div className="flex flex-col lg:flex-row lg:items-start gap-[40px] mb-[100px] xl:mb-[150px]">
            <ProfileOptions />
            {children}
        </div>
    )
}
