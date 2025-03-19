/** @format */

import { Header, Footer } from "../components";
import { Outlet } from "react-router-dom";
import { FloatButton } from "../components";
import imgMess from "../assets/messenger.png";
import imgzalo from "../assets/icons8-zalo-48.png";
const PublicLayout = () => {
  return (
    <div className="w-full mx-auto h-full bg-primary ">
      <div className="w-full  sticky top-0 z-10">
        <Header />

        <Outlet />
        <Footer />
        <div className="fixed bottom-4 right-4 flex flex-col gap-2   z-50 ">
          <FloatButton
            color={"#5271ff"}
            icon={"fluent:location-ripple-16-filled"}
            url={"https://maps.app.goo.gl/qqQVQ2V8k8cGZTaP9"}
          />

          <FloatButton
            color={"#5271ff"}
            icon={"line-md:facebook"}
            url={"https://www.facebook.com/AquaticsHubHanoi"}
          />

          <FloatButton
            color={"#5271ff"}
            img={imgMess}
            url={"https://m.me/AquaticsHubHanoi"}
          />

          <FloatButton
            color={"#5271ff"}
            img={imgzalo}
            url={"https://zalo.me/0969685445"}
          />

          <FloatButton
            color={"#FF5252FF"}
            icon={"ic:baseline-phone"}
            phoneNum={"0969685445"}
          />
        </div>
      </div>
    </div>
  );
};

export default PublicLayout;
