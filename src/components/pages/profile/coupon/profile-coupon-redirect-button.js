"use client"

import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';

import generateSignatureClient from "@/lib/utils/generate-signature-client";

export default function ProfileCouponRedirectButton({ children, className = "", id }) {
    const router = useRouter();

    const handleRedirect = () => {
        const signature = generateSignatureClient(`v-id=${id}`);
        router.push(`/san-pham/tim-kiem?v-id=${id}&signature=${signature}`);
    }

    return (
        <Button
            className={className}
            onClick={handleRedirect}
        >
            {children}
        </Button>
    )
}