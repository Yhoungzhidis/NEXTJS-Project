import { FC, ReactNode } from "react";
import Sidebar from "@/components/sidebar/Sidebar";
import styles from "@/components/dashboard.module.css";




interface AuthLayoutProps {
    children: ReactNode;
    
}
const AuthLayout: FC<AuthLayoutProps> = async ({children}) => {

  return (
     
    <div className="flex h-screen bg-gray-100">
   <aside className="w-64 bg-blue-100 text-blue-800">
        <div className="p-4">
          <h2 className="text-2xl font-bold">University of Ghana</h2>
        </div>
        <nav className="mt-6">
          <Sidebar/>
        </nav>
      </aside>
    <main className="flex-1 p-8">
      {children}
    </main>
  </div>
     
  );
};
export default AuthLayout;

