import React from "react";
import { Icon } from "@iconify/react";
import { useNavigate } from "react-router-dom";
const HomeCardSlide = ({ img, title, content, path, handleClick, cardId }) => {
  const navigate = useNavigate();
  // This state is used to show or hide the details of the card. Now it is set to true by default and will be used in the future.
  // Now, not use it.
  const [showDetails, setShowDetails] = React.useState(true);

  const [isLeftCard, setIsLeftCard] = React.useState(false);
  const [isRightCard, setIsRightCard] = React.useState(false);

  const handle = () => {
    handleClick();
  };

  React.useEffect(() => {
    const element = document.getElementById(cardId);

    // Check if the element is active
    if (element) {
      const observer = new MutationObserver((mutationsList) => {
        for (let mutation of mutationsList) {
          if (mutation.attributeName === "class") {
            if (element.classList.contains("swiper-slide-prev")) {
              setIsLeftCard(true);
            } else if (element.classList.contains("swiper-slide-next")) {
              setIsRightCard(true);
            }
          }
        }
      });

      observer.observe(element, { attributes: true });
      return () => observer.disconnect();
    }
  }, [cardId]);

  return (
    <div
      className={`card_slide w-[320px] xl:max-2xl:w-[250px] pv:max-xl:h-[500px] pv:max-ph:w-[300px] lg:max-xl:w-[200px] h-[550px] flex flex-col justify-start items-center bg-white shadow-md shadow-black
     ${isLeftCard || isRightCard ? "p-5" : "p-4"}`}
    >
      <img
        className=" rounded-xl img_slide h-[300px] max-dv:h-[260px] xl:max-dvmid:h-[200px] max-xl:h-[220px] w-full object-cover mb-2"
        src={img}
        alt={title}
      ></img>

      <div className="w-full py-2">
        <p className=" text_title text-center text-black text-xl xl:max-dvmid:text-lg font-bold uppercase max-dvmid:text-xl pv:max-lg:line-clamp-1">
          {title}
        </p>
      </div>

      <div
        className={`transition-all duration-500 ease-in-out ${
          showDetails
            ? "opacity-100 max-h-screen"
            : "opacity-0 max-h-0 overflow-hidden"
        }`}
      >
        <div className="w-full pt-2 md:pb-8">
          <p className="text-black text_content text-lg max-dvmid:text-lg xl:max-dvmid:text-[16px] pv:max-xl:h-[100px]">
            {content}
          </p>
        </div>
        <div className="w-full flex justify-center pt-2">
          <button
            className="text-xl max-dvmid:text-lg px-6 py-2 rounded-full bg-black flex justify-center items-center gap-2"
            onClick={() => {
              navigate("../" + path);
            }}
            // onClick={() => {
            //   title !== "PUBLIC ​SWIMMING"
            //     ? navigate("../" + path, {})
            //     : handle();
            // }}
          >
            <p className="text-white xl:max-dvmid:text-[16px] text_button text-nowrap">
              Read more
            </p>
            <Icon
              icon={"fluent-mdl2:page-right"}
              className="h-6 w-6 text-white"
            ></Icon>
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomeCardSlide;
