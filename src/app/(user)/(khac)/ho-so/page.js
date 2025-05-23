import { Suspense } from "react";
import ProfileGeneral from "@/components/pages/profile/general/profile-general";

export const metadata = {
	title: `${process.env.WEBSITE_NAME} - Hồ sơ - Thông tin chung`,
	description: "Generated by create next app"
};

export default function Page() {
    return (
        <Suspense fallback="Đang tải . . .">
            <ProfileGeneral />
        </Suspense>
    )
}