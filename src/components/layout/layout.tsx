import { Footer } from "../common/footer";
import { Navbar } from "../common/navbar";

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className="main-layout">
      <Navbar/>
      <div className="children-container">
        {children}
      </div>
      <Footer/>
    </div>
  )
}

export default MainLayout