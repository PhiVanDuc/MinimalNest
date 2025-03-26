import AuthOptions from "./auth-options";

export default function AuthButtons() {
    return (
        <div className="hidden xl:flex items-center text-[15px] text-darkMedium gap-x-[5px]">
            {/* <Button
                variant="ghost"
                className="hover:bg-transparent hover:bg-neutral-100 hover:text-darkBold transition-colors duration-300"
            >
                Đăng nhập
            </Button>
            <Button className="bg-yellowBold hover:bg-darkBold">Đăng kí</Button> */}

            <AuthOptions />
        </div>
    )
}