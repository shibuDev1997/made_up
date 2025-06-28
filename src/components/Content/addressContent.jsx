
import { Button } from "@/components/ui/button"
export const AddressesContent = () => (
    <div className="bg-white border border-[#333333] lg:mt-14 h-100">
        <div className="pt-6 pb-2 px-8">
            <h1 className="text-xl font-medium text-gray-800">Shipping Addresses</h1>
        </div>
        <div className="p-6">
            <div className="text-center py-12">
                <p className="text-gray-500 mb-4">No shipping addresses found</p>
                <Button className="bg-gray-900 text-white hover:bg-gray-800 font-medium text-[14px] rounded-none">Add New Address</Button>
            </div>
        </div>
    </div>
)

