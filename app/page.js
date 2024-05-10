import ButtonCustomerPortal from '@/components/ButtonCustomerPortal';
import Pricing from '@/components/Pricing';

export default function Page() {
    return (
        <>
            <header className="p-4 flex justify-end max-w-7xl mx-auto">
                <ButtonCustomerPortal />
            </header>

            <main className="bg-base-200 min-h-screen">
                <Pricing />
            </main>
        </>
    );
}
