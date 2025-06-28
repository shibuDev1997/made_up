import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export const ProfileContent = () => (
    <div className="bg-white  border border-[#333333] lg:mt-14">
        <div className="p-6 px-12">
            <h1 className="text-[22px] font-medium text-[#777777]">My Profile</h1>
        </div>
        <div className="px-12 pb-10">
            <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>

                        <Input id="firstName" placeholder="First name" className="mt-1 rounded-none border-[#D1D1D1] placeholder:text-[#888888] focus:border-[#333333]" />
                    </div>
                    <div>

                        <Input id="lastName" placeholder="Last name" className="mt-1 rounded-none border-[#D1D1D1] placeholder:text-[#888888] focus:border-[#333333]" />
                    </div>
                </div>

                <div>

                    <Input id="email" type="email" placeholder="Email" className="mt-1 rounded-none border-[#D1D1D1] placeholder:text-[#888888] focus:border-[#333333]" />
                </div>

                <div>

                    <Input id="phone" placeholder="Phone number" className="mt-1 rounded-none border-[#D1D1D1] placeholder:text-[#888888] focus:border-[#333333]" />
                </div>

                <div>

                    <Input id="password" type="password" placeholder="Password" className="mt-1 rounded-none border-[#D1D1D1] placeholder:text-[#888888] focus:border-[#333333]" />
                </div>

                <div>

                    <Input id="confirmPassword" type="password" placeholder="Confirm Password" className="mt-1 rounded-none border-[#D1D1D1] placeholder:text-[#888888] focus:border-[#333333]" />
                </div>
                <div className="flex justify-center lg:justify-end">
                <Button className="bg-gray-900 text-white hover:bg-gray-800 font-medium text-[14px] rounded-none">ADD NEW ADDRESS</Button>
                </div>
            </div>
        </div>
    </div>
)