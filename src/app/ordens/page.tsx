"use client";
import { useState } from "react";

import { OrderLine } from "@/components/orderLine";
import { Header } from "@/components/ui/header";
import Sidebar from "@/components/ui/sidebar";
import { Footer } from "@/components/useFooter";
import { PaginationComponent } from "@/components/usePagination";

export default function OrdensAndamento() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const [userImage, setUserImage] = useState<string | null>(null);

  return (
    <main className="flex flex-col h-screen">
      <div>
        <Header toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />

        <Sidebar isOpen={isSidebarOpen} userImage={userImage} />

        <div className="flex flex-col">
          <div className="flex flex-row m-5">
            <h1 className=" text-2xl text-red text font-bold">
              Todas as minhas ordens
            </h1>
          </div>

          <div className="w-full h-full flex flex-row gap-20">
            <div className="flex flex-col gap-15 mt-2 ml-2 ">
              <OrderLine />
              <OrderLine />
              <OrderLine />
              <OrderLine />
              <OrderLine />
            </div>

            <div className="flex flex-col gap-15 mt-2">
              <OrderLine />
              <OrderLine />
            </div>
          </div>
        </div>
      </div>

      <div className="mt-auto">
        <div className="mt-4">
          <PaginationComponent />
        </div>

        <div className="mt-5 mb-28">
          <Footer />
        </div>
      </div>
    </main>
  );
}
