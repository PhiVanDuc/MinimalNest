import ProfileOptions from "@/components/pages/profile/profile-options";

export default function Layout({ children }) {
    return (
        <div className="relative flex flex-col lg:flex-row lg:items-start gap-[40px]">
            <ProfileOptions />
            {children}
        </div>
    )
}
