import { AddressesContent } from "@/components/Content/addressContent"
import { OrdersContent } from "@/components/Content/orderContent"
import { ProfileContent } from "@/components/Content/profileContent"
import { orders } from "@/components/TempData/tempData"
import { img10 } from "@/components/helpers/ImageHelper"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { Input } from "@/components/ui/input"
import { ChevronDown, ChevronRight } from "lucide-react"
import Image from "next/image"
import { useState } from "react"

export default function Component() {
  const [activeSection, setActiveSection] = useState("profile")
  const [selectedOrder, setSelectedOrder] = useState(-1)


  const renderContent = () => {
    switch (activeSection) {
      case "profile":
        return <ProfileContent />
      case "orders":
        return <OrdersContent />
      case "addresses":
        return <AddressesContent />
      default:
        return <ProfileContent />
    }
  }

  return (
    <div className="min-h-screen bg-white mt-8">

      <div className="hidden md:flex max-w-7xl mx-auto">
        {/* Sidebar */}
        <div className="w-96 bg-white p-6  min-h-screen">
          <div className="mb-8">
            <div className="text-sm text-gray-500 mb-4">Home / My Profile</div>
            <div className="flex items-center gap-3 mb-6 mt-8">
              <Avatar className="w-16 h-16">
                <AvatarImage src={'../assets/dummy/img_10.png'} className='transition-transform duration-300 hover:scale-105'/>
                <AvatarFallback>G</AvatarFallback>
              </Avatar>
              <div>
                <div className="font-medium">Grishk</div>
                <div className="text-sm text-gray-500">grishkani@gmail.com</div>
              </div>
            </div>
          </div>

          <nav className="space-y-1 mt-10">
            <div
              className={`flex items-center justify-between py-3 px-3 rounded  cursor-pointer transition-colors  ${activeSection === "profile" ? "bg-gray-100" : "text-gray-500"}`}
              onClick={() => setActiveSection("profile")}
            >
              <div>
                <div className="font-semibold text-[16px] text-[#000000]">My Profile</div>
                <div className={`text-[14px]`}>
                  Name/Email, password
                </div>
              </div>
              <ChevronRight className="w-6 h-6 text-[#333333]" />
              
            </div>
            {activeSection === "profile" && <div className="w-96 h-2 border-b border-[#000000]"></div>}
          
            <div
              className={`flex items-center justify-between py-3 px-3 rounded cursor-pointer transition-colors  ${activeSection === "orders" ? "bg-gray-100" : "text-gray-500"}`}
              onClick={() => setActiveSection("orders")}
            >
              <div>
                <div className="font-semibold text-[16px] text-[#000000]">My orders</div>
                <div className={`text-[14px] `}>
                  Already have 12 orders
                </div>
              </div>
              <ChevronRight className="w-6 h-6 text-[#333333]" /> 
            </div>
            {activeSection === "orders" && <div className="w-96 h-2 border-b border-[#000000]"></div>}
            <div
              className={`flex items-center justify-between py-3 px-3 rounded cursor-pointer transition-colors orders  ${activeSection === "addresses" ? "bg-gray-100" : "text-gray-500"}`}
              onClick={() => setActiveSection("addresses")}
            >
              <div>
                <div className="font-semibold text-[16px] text-[#000000]">Shipping addresses</div>
                <div className={`text-[14px]`}>
                  3 addresses
                </div>
              </div>
              <ChevronRight className="w-6 h-6 text-[#333333]" />
            </div>
            {activeSection === "addresses" && <div className="w-96 h-2 border-b border-[#000000]"></div>}
          </nav>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-8">{renderContent()}</div>
      </div>

      {/* Mobile Layout with Accordion */}
      <div className="md:hidden bg-white">
        <div className="p-4 border-b">
          <div className="flex items-center gap-3">
            <Avatar className="w-10 h-10">
              <AvatarImage src="/placeholder.svg?height=40&width=40" />
              <AvatarFallback>G</AvatarFallback>
            </Avatar>
            <div>
              <div className="font-medium">Grishk</div>
              <div className="text-sm text-gray-500">grishkani@gmail.com</div>
            </div>
          </div>
        </div>

        <div className="divide-y">
          <Collapsible defaultOpen={activeSection === "profile"}>
            <CollapsibleTrigger className="flex items-center justify-between w-full p-4 hover:bg-gray-50">
              <div>
                <div className="font-medium text-left">My Profile</div>
                <div className="text-xs text-gray-500 text-left">Name/Email, password</div>
              </div>
              <ChevronDown className="w-4 h-4" />
            </CollapsibleTrigger>
            <CollapsibleContent className="bg-white p-4">
              <div className="bg-white rounded-lg p-4">
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-3">
                    <Input placeholder="First name"  className="mt-1 text-sm rounded-none border-[#D1D1D1] placeholder:text-[#888888] focus:border-[#333333]"  />
                    <Input placeholder="Last name"  className="mt-1 text-sm rounded-none border-[#D1D1D1] placeholder:text-[#888888] focus:border-[#333333]"  />
                  </div>
                  <Input placeholder="Email" className="mt-1 text-sm rounded-none border-[#D1D1D1] placeholder:text-[#888888] focus:border-[#333333]" />
                  <Input placeholder="Phone number"  className="mt-1 text-sm rounded-none border-[#D1D1D1] placeholder:text-[#888888] focus:border-[#333333]"  />
                  <Input type="password" placeholder="Password"  className="mt-1 text-sm rounded-none border-[#D1D1D1] placeholder:text-[#888888] focus:border-[#333333]"  />
                  <Input type="password" placeholder="Confirm Password"  className="mt-1 text-sm rounded-none border-[#D1D1D1] placeholder:text-[#888888] focus:border-[#333333]"  />
                  <Button className="w-full bg-gray-900 text-white hover:bg-gray-800 text-sm rounded-none">ADD NEW ADDRESS</Button>
                </div>
              </div>
            </CollapsibleContent>
          </Collapsible>

          <Collapsible defaultOpen={activeSection === "orders"}>
            <CollapsibleTrigger className="flex items-center justify-between w-full p-4 hover:bg-gray-50">
              <div>
                <div className="font-medium text-left">My orders</div>
                <div className="text-xs text-gray-500 text-left">Already have 12 orders</div>
              </div>
              <ChevronDown className="w-4 h-4" />
            </CollapsibleTrigger>
            <CollapsibleContent className="bg-white p-4">
              <div className="text-sm font-medium text-gray-600 mb-4">Pending Orders</div>
              <div className="space-y-3">
                {orders
                  .filter((order) => order.status === "Pending")
                  .map((order, index) => (
                    <div key={index} className="bg-white rounded-none p-3 border border-[#333333]">
                      <div className="flex items-center gap-3">
                        <Image
                          src={order.img}
                          alt="Product"
                          width={60}
                          height={60}
                          className="rounded-none border p-1 bg-[#DDDDDD] transition-transform duration-300 hover:scale-105"
                        />
                        <div className="flex-1 min-w-0">
                          <div className="text-sm text-gray-500">Order {order.id}</div>
                          <div className="font-medium text-sm truncate">{order.product}</div>
                          <div className="text-xs text-gray-600">{order.delivery}</div>
                          <div className="text-sm font-semibold text-gray-900 mt-1">
                            Cash on delivery • {order.price}
                          </div>
                        </div>
                        <div className="flex flex-col items-end gap-2">
                          <ChevronRight className="w-4 h-4 text-gray-400" />
                          <Button size="sm" className="text-xs bg-gray-900 text-white hover:bg-gray-800 rounded-none">
                            {order.status}
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </CollapsibleContent>
          </Collapsible>

          <Collapsible defaultOpen={activeSection === "addresses"}>
            <CollapsibleTrigger className="flex items-center justify-between w-full p-4 hover:bg-gray-50">
              <div className="font-medium">Shipping addresses</div>
              <ChevronDown className="w-4 h-4" />
            </CollapsibleTrigger>
            <CollapsibleContent className="bg-white p-4">
              <div className="bg-white rounded-lg p-4 text-center">
                <p className="text-gray-500 mb-4 text-sm">No shipping addresses found</p>
                <Button className="bg-gray-900 text-white hover:bg-gray-800 text-sm">Add New Address</Button>
              </div>
            </CollapsibleContent>
          </Collapsible>
        </div>
      </div>
    </div>
  )
}
