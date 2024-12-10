import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import React from "react";

const TabsDashboard = ({ coins }) => {
  return (
    <div className="container mx-auto max-w-screen-xl px-4 py-4">
      <Tabs defaultValue="grid" className="w-full">
        <TabsList className="w-full flex justify-center">
          <TabsTrigger value="grid" className="flex-1 text-center">
            Grid
          </TabsTrigger>
          <TabsTrigger value="list" className="flex-1 text-center">
            List
          </TabsTrigger>
        </TabsList>
        <TabsContent value="grid" className="w-full">
          <div className="">
            {coins.map((item, i) => {
              return (
                <>
                  <p>{i + 1}</p>
                  <h1>{item.name}</h1>
                </>
              );
            })}
          </div>
        </TabsContent>
        <TabsContent value="list" className="w-full">
          Change your password here.
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default TabsDashboard;
