"use client";

import SectionTitle from "@/components/ui/SectionTitle";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { PLANS } from "./plans";
import PlanCard from "./PlanCard";
import { useT } from "@/contexts/LanguageContext";

export default function Payment() {
  const t = useT();
  const p = t.payment;

  return (
    <section
      id="payment"
      className="section-padding bg-gradient-to-b from-rose-50 to-white dark:from-gray-900 dark:to-gray-900"
    >
      <div className="section-container max-w-lg mx-auto">
        {/* Header */}
        <div data-reveal className="text-center mb-10">
          <SectionTitle title={p.title} subtitle={p.subtitle} />
        </div>

        {/* Package selector */}
        <div data-reveal data-delay="100">
          <Tabs defaultValue="1m" dir="rtl" className="w-full">
            <TabsList className="w-full mb-8 bg-gray-100 dark:bg-gray-800 rounded-2xl p-1 h-auto gap-1 border border-rose-200 dark:border-gray-700">
              {PLANS.map((plan) => (
                <TabsTrigger
                  key={plan.id}
                  value={plan.id}
                  className="flex-1 py-2.5 text-xs sm:text-sm font-bold rounded-xl transition-all
                    text-gray-500 dark:text-gray-400
                    hover:text-gray-700 dark:hover:text-gray-200
                    data-[state=active]:bg-gradient-to-l data-[state=active]:from-rose-400
                    data-[state=active]:to-rose-600 data-[state=active]:text-white
                    data-[state=active]:shadow-md"
                >
                  {p.tabs[plan.id as keyof typeof p.tabs]}
                </TabsTrigger>
              ))}
            </TabsList>

            {PLANS.map((plan) => (
              <TabsContent key={plan.id} value={plan.id}>
                <PlanCard
                  plan={plan}
                  tabLabel={p.tabs[plan.id as keyof typeof p.tabs]}
                />
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </section>
  );
}
