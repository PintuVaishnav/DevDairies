import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="flex flex-col min-h-screen  dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      

      {/* Main Content */}
      <main className="flex-grow">{children}</main>

      {/* Footer */}
      
    </div>
  );
}
