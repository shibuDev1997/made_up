
import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-react"
import Image from "next/image"
import { orders } from "../TempData/tempData"

export const OrdersContent = () => (
    <div className="bg-white border border-[#333333] lg:mt-14">
        <div className="pt-6 pb-2 px-8">
            <h1 className="text-xl font-medium text-gray-800">My Orders</h1>
        </div>
        <div className="p-6 space-y-4">
            {orders.map((order, index) => (
                <div key={index} className="border-b rounded-none p-4 border-[#333333] transition-all">
                    <div className="flex items-start gap-4">
                        
                        <Image
                            src={order?.img}
                            alt="Product"
                            width={80}
                            height={80}
                            className="rounded-none border p-2 bg-[#DDDDDD] transition-transform duration-300 hover:scale-105"
                        />
                        
                        <div className="flex-1">
                            <div className="flex justify-between items-start mb-2">
                                <div>
                                    <div className="text-sm text-gray-500 mb-1">Order {order.id}</div>
                                    <div className="font-medium text-gray-900 mb-1">{order.product}</div>
                                    <div className="text-sm text-gray-600">{order.delivery}</div>
                                </div>
                                <div className="text-right">
                                    <div className="text-sm text-gray-500 mb-1">{order.payment}</div>
                                    <div className="font-semibold text-gray-900">{order.price}</div>
                                </div>

                            </div>
                            <div className="flex justify-end items-center mb-2">
                                <ChevronDown className="w-6 h-6 text-[#333333]" />
                            </div>
                            <div className="flex justify-between items-center">
                              
                                <div></div>
                                <div className="flex items-center gap-2">
                                    <Button
                                        size="sm"
                                        variant={order.status === "Delivered" ? "secondary" : "default"}
                                        className={
                                            order.status === "Delivered"
                                                ? "bg-gray-100 text-gray-700 hover:bg-gray-200 rounded-md"
                                                : "bg-gray-900 text-white hover:bg-gray-800 rounded-md"
                                        }
                                    >
                                        {order.status}
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </div>
)