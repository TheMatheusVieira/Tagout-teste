// // components/notifications/NotificationDropdown.tsx
// "use client";

// import { BellDot } from "lucide-react";
// import { useState } from "react";

// export function NotificationDropdown() {
//   const [isOpen, setIsOpen] = useState(false);
  
//   const notificacoes = [
//     { 
//       status: "registered",
//       title: "Nova atividade registrada", 
//       desc: "Sua atividade 'Painel Elétrico Y' foi registrada.",
//       time: "2 min atrás"
//     },
//     { 
//       status: "completed",
//       title: "Atividade concluída", 
//       desc: "Sua atividade 'Painel Elétrico X' foi concluída.",
//       time: "1 hora atrás"
//     },
//   ];

//   const unreadCount = notificacoes.length;

//   return (
//     <div className="relative">
//       <button
//         type="button" 
//         onClick={() => setIsOpen(!isOpen)}
//         className="hover:opacity-80 transition-opacity hover:cursor-pointer relative"
//       >
//         <BellDot size={40} className="text-white" />
//         {unreadCount > 0 && (
//           <span className="absolute top-0 right-0 bg-white text-red-500 text-xs rounded-full h-5 w-5 flex items-center justify-center font-bold">
//             {unreadCount}
//           </span>
//         )}
//       </button>

//       {isOpen && (
//         <div className="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-xl z-50 text-gray-800">
//           <div className="m-4 border-b border-gray-200">
//             <h3 className="font-semibold text-lg">Notificações</h3>
//             <span className="text-sm text-gray-500">{unreadCount} novas</span>
//           </div>
          
//           <div className="max-h-96 overflow-y-auto">
//             {notificacoes.map((notif, index) => (
//               <div 
//                 // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
//                 key={index}
//                 className={`p-4 border-b border-gray-100 last:border-b-0 ${
//                   notif.status === "registered" ? "bg-blue-50" : "bg-green-50"
//                 }`}
//               >
//                 <div className="flex items-start gap-3">
//                   <div className={`mt-1 w-2 h-2 rounded-full ${
//                     notif.status === "registered" ? "bg-blue-500" : "bg-green-500"
//                   }`} />
//                   <div className="flex-1">
//                     <div className="flex justify-between">
//                       <h4 className="font-medium">{notif.title}</h4>
//                       <span className="text-xs text-gray-500">{notif.time}</span>
//                     </div>
//                     <p className="text-sm text-gray-600 mt-1">{notif.desc}</p>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
          
          
//         </div>
//       )}
//     </div>
//   );
// }

// components/notifications/NotificationDropdown.tsx
"use client";

import { BellDot } from "lucide-react";
import { useState, useRef, useEffect } from "react";

// Mock de dados - substitua por chamada à API posteriormente
const mockNotifications = Array.from({ length: 25 }, (_, i) => ({
  status: i % 2 === 0 ? "registered" : "completed",
  title: i % 2 === 0 ? "Nova atividade registrada" : "Atividade concluída",
  desc: i % 2 === 0 
    ? `Sua atividade 'Painel Elétrico ${String.fromCharCode(65 + (i % 5))}' foi registrada.`
    : `Sua atividade 'Painel Elétrico ${String.fromCharCode(65 + (i % 5))}' foi concluída.`,
  time: i < 5 ? `${i + 1} min atrás` : `${i + 1} horas atrás`,
  id: i.toString(),
}));

export function NotificationDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const [visibleNotifications, setVisibleNotifications] = useState(2);
  const [allNotifications, setAllNotifications] = useState(mockNotifications.slice(0, 10));
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Fechar dropdown ao clicar fora
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Mostrar mais notificações ao rolar
  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const { scrollTop, scrollHeight, clientHeight } = e.currentTarget;
    const isNearBottom = scrollHeight - scrollTop <= clientHeight * 1.2;

    if (isNearBottom && visibleNotifications < allNotifications.length) {
      setVisibleNotifications(prev => Math.min(prev + 2, allNotifications.length));
    }
  };

  // Carregar mais notificações
  const loadMoreNotifications = () => {
    const nextBatch = mockNotifications.slice(
      allNotifications.length,
      allNotifications.length + 10
    );
    setAllNotifications(prev => [...prev, ...nextBatch]);
    setVisibleNotifications(prev => prev + 2);
  };

  const unreadCount = allNotifications.length;

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        type="button" 
        onClick={() => {
          setIsOpen(!isOpen);
          setVisibleNotifications(2); // Reset para 2 notificações visíveis ao abrir
        }}
        className="hover:opacity-80 transition-opacity hover:cursor-pointer relative"
      >
        <BellDot size={40} className="text-white" />
        {unreadCount > 0 && (
          <span className="absolute top-0 right-0 bg-white text-red-500 text-xs rounded-full h-5 w-5 flex items-center justify-center font-bold">
            {Math.min(unreadCount, 99)}
          </span>
        )}
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-xl z-[9998] text-gray-800">
          <div className="m-4 mt-2.5 border-b border-red">
            <h3 className="font-semibold text-lg text-red-900">Notificações</h3>
            <span className="text-sm text-irongray">{unreadCount} novas</span>
          </div>
          
          <div 
            className="max-h-96 overflow-y-auto"
            onScroll={handleScroll}
          >
            {allNotifications.slice(0, visibleNotifications).map((notif) => (
              <div 
                key={notif.id}
                className={`p-4 border-b border-gray-100 ${
                  notif.status === "registered" ? "bg-blue-50" : "bg-green-50"
                }`}
              >  
                <div className="flex items-start gap-3">
                  <div className={`mt-2 w-2 h-2 rounded-full ${
                    notif.status === "registered" ? "bg-blue-500" : "bg-green-500"
                  }`} />
                  <div className="flex-1">
                    <div className="flex justify-between">
                      <h4 className="font-medium">{notif.title}</h4>
                      <span className="text-xs text-gray-500">{notif.time}</span>
                    </div>
                    <p className="text-sm text-gray-600 mt-1">{notif.desc}</p>
                  </div>
                </div>
              </div>
            ))}

            {visibleNotifications < allNotifications.length && (
              <div className="p-3 text-center bg-gray-50 rounded-lg">
                <button
                type="button" 
                  className="text-sm text-red hover:text-red-900"
                  onClick={loadMoreNotifications}
                >
                  Ver mais notificações
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}