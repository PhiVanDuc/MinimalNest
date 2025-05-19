import AccountEditClient from "./account-edit-client";
import Error from "@/components/customs/error";

import { getAccount } from "@/lib/api/server-action/account";
import { getRoles } from "@/lib/api/server-action/role";

export default async function AccountEdit({ params }) {
    const [roleRes, accountRes] = await Promise.all([
        getRoles({ all: "true" }),
        getAccount(params.accountId)
    ]);

    const { response: responseRole, roles } = roleRes;
    const { response: responseAccount, account } = accountRes;

    const perError = !roles?.success;
    const accountError = !account?.success;

    if (perError && accountError) {
        return (
            <>
                <Error message={`${responseRole?.status},${roles?.message}`} />
                <Error message={`${responseAccount?.status},${account?.message}`} />
            </>
        );
    }

    if (perError) return <Error message={`${responseRole?.status},${roles?.message}`} />;
    if (accountError) return <Error message={`${responseAccount?.status},${account?.message}`} />;

    return (
        <AccountEditClient roles={roles?.data?.roles || []} account={account?.data?.account || {}} />
    )
}
