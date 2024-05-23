import React from "react";

function SubscriptionStripe() {
  return (
    <div class='flex min-h-screen pt-[30px] px-[40px]'>
   <div class="min-w-full">
       <p class="text-[#00153B] text-[20px] leading-[40px] font-semibold">
           Your Subscription
       </p>

       <div>
           <p class="text-[#717F87] text-[15px] leading-[27px] font-medium">
               Aliquam sagittis sapien in nibh tincidunt fermentum. Morbi eleifend faucibus.
           </p>
       </div>

       <div class="mt-[30px] inline-flex border border-[#E1E3E5] shadow-[0px 1px 2px #E1E3E5] divide-[#E1E3E5] divide-x rounded-[5px]">
            <button class="bg-white hover:bg-[#F6F6F7] hover:text-[#717F87] text-[#0E1823] leading-[16px] text-[13px] font-semibold font-bold py-[15px] px-[25px] rounded-l">
                Monthly
            </button>
			<button class="bg-white hover:bg-[#F6F6F7] hover:text-[#717F87] text-[#0E1823] text-[13px] leading-[16px] font-semibold font-bold py-[15px] px-[25px] rounded-r">
                Annual
            </button>
		</div>

        <div class="mt-[20px] grid grid-cols-3 gap-[20px]">
            <div key="1" class="w-full bg-[#fff] rounded-[10px] shadow-[0px 1px 2px #E1E3E5] border border-[#E1E3E5] divide-y">
                <div class="pt-[15px] px-[25px] pb-[25px]">
                    <div class="flex justify-end">
                        <div class="bg-[#F6F6F7] rounded-[20px] flex justify-center align-center px-[12px]">
                            <p class="text-[#00153B] text-[12px] leading-[28px] font-bold">
                                Starter
                            </p>
                        </div>
                    </div>

                    <div>
                        <p class="text-[#00153B] text-[19px] leading-[24px] font-bold">
                            Trial
                        </p>
                        <p class="text-[#00153B] text-[50px] leading-[63px] font-bold">
                            Free
                        </p>
                    </div>

                    <div>
                        <p class="text-[#717F87] text-[18px] leading-[28px] font-medium">
                            5 Credits
                        </p>
                        <p class="text-[#717F87] text-[18px] leading-[28px] font-medium">
                            1 User
                        </p>
                    </div>
                </div>

                <div class="pt-[25px] px-[25px] pb-[35px]">
                    <div>
                        <p class="text-[#717F87] text-[14px] leading-[24px] font-medium">
                            Direct Phone Numbers
                        </p>
                        <p class="text-[#717F87] text-[14px] leading-[24px] font-medium">
                            Landline Phone Numbers
                        </p>
                        <p class="text-[#717F87] text-[14px] leading-[24px] font-medium">
                            Corporate email addresses
                        </p>
                        <p class="text-[#717F87] text-[14px] leading-[24px] font-medium">
                            Propsetcs
                        </p>
                        <p class="text-[#717F87] text-[14px] leading-[24px] font-medium">
                            Chrome Extension
                        </p>
                    </div>

                    <div class="mt-[25px]">
                        <button class="bg-[#006EF5] rounded-[5px] py-[15px] px-[25px] text-[#fff] text-[14px] leading-[17px] font-semibold">Downgrade +</button>
                    </div>
                </div>
            </div>

            <div key="2" class="w-full bg-[#fff] rounded-[10px] shadow-[0px 1px 2px #E1E3E5] border border-[#E1E3E5] divide-y">
                <div class="pt-[15px] px-[25px] pb-[25px]">
                    <div class="flex justify-end">
                        <div class="bg-[#F6F6F7] rounded-[20px] flex justify-center align-center px-[12px]">
                            <p class="text-[#00153B] text-[12px] leading-[28px] font-bold">
                                Value
                            </p>
                        </div>
                    </div>

                    <div>
                        <p class="text-[#00153B] text-[19px] leading-[24px] font-bold">
                            Fast Start
                        </p>
                        <p class="text-[#00153B] text-[50px] leading-[63px] font-bold">
                            $49
                        </p>
                    </div>

                    <div>
                        <p class="text-[#717F87] text-[18px] leading-[28px] font-medium">
                            50 Credits per month
                        </p>
                        <p class="text-[#717F87] text-[18px] leading-[28px] font-medium">
                            Unlimited users
                        </p>
                    </div>
                </div>

                <div class="pt-[25px] px-[25px] pb-[35px]">
                    <div>
                        <p class="text-[#717F87] text-[14px] leading-[24px] font-medium">
                            Direct Phone Numbers
                        </p>
                        <p class="text-[#717F87] text-[14px] leading-[24px] font-medium">
                            Landline Phone Numbers
                        </p>
                        <p class="text-[#717F87] text-[14px] leading-[24px] font-medium">
                            Corporate email addresses
                        </p>
                        <p class="text-[#717F87] text-[14px] leading-[24px] font-medium">
                            Propsetcs
                        </p>
                        <p class="text-[#717F87] text-[14px] leading-[24px] font-medium">
                            Chrome Extension
                        </p>
                    </div>

                    <div class="mt-[25px]">
                        <button class="bg-[#E1E3E5] rounded-[5px] py-[15px] px-[25px] text-[#fff] text-[14px] leading-[17px] font-semibold">Current Plan</button>
                    </div>
                </div>
            </div>

            <div key="3" class="w-full bg-[#fff] rounded-[10px] shadow-[0px 1px 2px #E1E3E5] border border-[#E1E3E5] divide-y">
                <div class="pt-[15px] px-[25px] pb-[25px]">
                    <div class="flex justify-end">
                        <div class="bg-[#F6F6F7] rounded-[20px] flex justify-center align-center px-[12px]">
                            <p class="text-[#00153B] text-[12px] leading-[28px] font-bold">
                                Pro
                            </p>
                        </div>
                    </div>

                    <div>
                        <p class="text-[#00153B] text-[19px] leading-[24px] font-bold">
                            Accelerate
                        </p>
                        <p class="text-[#00153B] text-[50px] leading-[63px] font-bold">
                            $89
                        </p>
                    </div>

                    <div>
                        <p class="text-[#717F87] text-[18px] leading-[28px] font-medium">
                            100 Credits per month
                        </p>
                        <p class="text-[#717F87] text-[18px] leading-[28px] font-medium">
                            Unlimited users
                        </p>
                    </div>
                </div>

                <div class="pt-[25px] px-[25px] pb-[35px]">
                    <div>
                        <p class="text-[#717F87] text-[14px] leading-[24px] font-medium">
                            Direct Phone Numbers
                        </p>
                        <p class="text-[#717F87] text-[14px] leading-[24px] font-medium">
                            Landline Phone Numbers
                        </p>
                        <p class="text-[#717F87] text-[14px] leading-[24px] font-medium">
                            Corporate email addresses
                        </p>
                        <p class="text-[#717F87] text-[14px] leading-[24px] font-medium">
                            Propsetcs
                        </p>
                        <p class="text-[#717F87] text-[14px] leading-[24px] font-medium">
                            Chrome Extension
                        </p>
                    </div>

                    <div class="mt-[25px]">
                        <button class="bg-[#006EF5] rounded-[5px] py-[15px] px-[25px] text-[#fff] text-[14px] leading-[17px] font-semibold">Upgrade +</button>
                    </div>
                </div>
            </div>
        </div>
   </div>
</div>
  );
}

export default SubscriptionStripe;

