import Header from "@/components/header";
import {Outlet} from "react-router-dom";

const AppLayout = () => {
  return (
    <div>
      <main className="min-h-screen container">
        <Header />
        <Outlet />
      </main>
      <div className="p-10 text-center bg-gray-800 mt-10 flex justify-between" >
        {/* Made with 💗 by RoadsideCoder */}
        
  <a href="https://facebook.com/yourprofile" target="_blank" aria-label="Facebook">
    <i class="fab fa-facebook" className="h-24 w24"></i>
  </a>
  <a href="https://twitter.com/" target="_blank" aria-label="Twitter">
    <i class="fab fa-twitter" className="h-24 w24"></i>
  </a>
  <a href="https://linkedin.com" target="_blank" aria-label="LinkedIn">
  <i class="fab fa-linkedin" className="h-24 w24"></i>
  </a>
</div>

      </div>
   
  );
};

export default AppLayout;
