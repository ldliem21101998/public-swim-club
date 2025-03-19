/** @format */

import imghome_1 from "../assets/expertcoach.png";
import imghome_2 from "../assets/international_standard.png";
import imghome_3 from "../assets/classesforall.png";
import imghome_4 from "../assets/competitive.png";
import { path } from "../utils/common/constant";

import purpleCup from "../assets/purple-cup.png";
import bronzeCup from "../assets/bronze-cup.png";
import silverCup from "../assets/silver-cup.png";
import goldCup from "../assets/gold-cup.png";
import eliteCup from "../assets/elite-cup.png";
import imgstartfish from "../assets/level_stafish.jpg";
import imgseahorse from "../assets/seahourse.jpg";
import imgseal from "../assets/seal.jpg";
import imgbarracuda from "../assets/Barracuda.jpg";
import imgswordfish from "../assets/swordfish.jpg";
import imgdolphin from "../assets/dolphin.jpg";

// Service
import ServiceAdult from "../assets/Services/ServiceAdult.jpg";
import Service_Rental from "../assets/Services/Service_Rental.png";
import ServiceChildren from "../assets/Services/ServiceChildren.jpg";
import ServiceClub from "../assets/Services/ServiceClub.png";
import ServiceColdPlune from "../assets/Services/ServiceColdPlune.png";
import ServiceFlowmachine from "../assets/Services/ServiceFlowmachine.jpg";
import Servicepoolparty from "../assets/Services/Servicepoolparty.png";

// Homepage Asset
// Carousel
import img_CAdult from "../assets/HomePage/Carousel/Adult.jpg";
import img_CChildrenSwimmingLesson from "../assets/HomePage/Carousel/ChildrenSwimmingLesson.jpg";
import img_CClub from "../assets/HomePage/Carousel/Club.png";
import img_COtherService from "../assets/HomePage/Carousel/OtherService.png";
import img_CPublicSwmming from "../assets/HomePage/Carousel/PublicSwimming.png";

// Coaches
import img_Thanh from "../assets/HomePage/coaches/Coach_Thanh.jpg";
import img_Martin from "../assets/HomePage/coaches/Coach_Martin.jpg";
import img_Johnny from "../assets/HomePage/coaches/Coach_johnny.jpg";
import imgSchedule from "../assets/schedule/mainSchedule.png";

// Home

export const coaches = [
  {
    avatar: img_Martin,
    name: "Coach name 1",
    infos: [
      {
        info: "Info 1",
      },
      {
        info: "Info 2",
      },
      {
        info: "Info 3",
      },
    ],
  },
  {
    avatar: img_Johnny,
    name: "Coach name 2",
    infos: [
      {
        info: "Info 1",
      },
      {
        info: "Info 2",
      },
      {
        info: "Info 3",
      },
    ],
  },
  {
    avatar: img_Thanh,
    name: "Coach name 3",
    infos: [
      {
        info: "Info 1",
      },
      {
        info: "Info 2",
      },
      {
        info: "Info 3",
      },
    ],
  },
];

export const datahome_1 = [
  {
    key: "1",
    img: imghome_1,
    title: "Expert Coaches",
    content:
      "Our expert coaches train not only swimming skills but also the right mindset, fostering confidence, resilience, and a love for the sport to help swimmers reach their full potential.",
  },
  {
    key: "2",
    img: imghome_2,
    title: "International standard",
    content:
      "Our 8-lane, 25-meter pool in Hanoi meets international standards and offers year- round heated water, providing a welcoming space for swimmers of all ages to enjoy and stay active.",
  },
  {
    key: "3",
    img: imghome_3,
    title: "Classes for all levels",
    content:
      "Courses for all levels, from beginners to advanced, with personalized instruction.",
  },
  {
    key: "4",
    img: imghome_4,
    title: "Exciting competition",
    content:
      "We host thrilling competitions year-round, providing swimmers with opportunities to challenge themselves and celebrate their progress.",
  },
];
export const dataCardService = [
  {
    key: "1",
    img: img_COtherService,
    title: "Other services",
    content: "We offer pool party, Lane rental, and Cold plunge ",
    path: path.POOLPARTY,
  },
  {
    key: "2",
    img: img_CAdult,
    title: "Adult swiming courses",
    content:
      "Courses for all levels, from beginners to advanced, with personalized instruction.",
    path: path.SERVICEADULT,
  },
  {
    key: "3",
    img: img_CPublicSwmming,
    title: "PUBLIC ​SWIMMING",
    content:
      "Explore The Aquarium, a revolutionary aquatic sanctuary in Hanoi.",
    path: path.ALLSERVICE,
  },
  {
    key: "4",
    img: img_CChildrenSwimmingLesson,
    title: "CHILDREN SWIMMING LESSONS",
    content:
      "Fun, safe, and skill-building classes that help kids gain confidence in the water.",
    path: path.CHILDRENSWIMMINGLESSON,
  },
  {
    key: "5",
    img: img_CClub,
    title: "Flying fish CLUB",
    content:
      "A competitive swim team for young swimmers, focusing on training and teamwork..",
    path: path.CLUB,
  },
];

export const dataAllService = [
  {
    key: "1",
    img: ServiceAdult,
    ServiceName: " swiming courses",
    type: "Adult",
    color: "#62338f",
    path: path.SERVICEADULT,
    content:
      "Whether you're a beginner, looking to refine your technique, or aiming to master advanced skills, we've got you covered.",
  },
  {
    key: "2",
    img: ServiceChildren,
    ServiceName: " SWIMMING LESSONS",
    type: "CHILDREN",
    path: path.CHILDRENSWIMMINGLESSON,
    color: "#ffaa00",
    content:
      "Small groups with trained instructors ​for fast progression.you may ​be achieving your first 5km swim before you know it!",
  },
  {
    key: "3",
    img: ServiceClub,
    ServiceName: "fish CLUB",
    type: "flying",
    color: "#cb6ce6",
    content:
      "Where passion meets potential! we're a ​community committed to nurturing ​young swimmers with the attitude, ​drive, and potential to excel in the ​pool.",

    path: path.CLUB,
  },
];

export const dataOtherService = [
  {
    key: "1",
    img: ServiceColdPlune,
    ServiceName: "COLD PLUNGE",
    path: path.COLDPLUNGE,
    ref: "cold-plunge",
  },
  {
    key: "2",
    img: ServiceFlowmachine,
    ServiceName: "FLOW MACHINE",
    path: path.POOLPARTY,
    ref: "the-aquarium",
  },
  {
    key: "3",
    img: Servicepoolparty,
    ServiceName: "POOL PARTY",
    path: path.POOLPARTY,
    ref: "pool-party",
  },
  {
    key: "4",
    img: Service_Rental,
    ServiceName: "SWIMMING LANE RENTAL",
    path: path.POOLPARTY,
    ref: "swimming-lane-rental",
  },
];

export const dataSchedule = [
  {
    key: "pool-schedule",
    title: "Pool Schedule",
    date: "29/10/2024",
    content: "",
    // "Anouncement and updates: We will update our weekly schedule here, So come and check often for updates and schedules.... All schedule on this page AND info page Updates on both",
    img: imgSchedule,
  },
];

export const dataNowClub = [
  {
    img: "https://1cinnovation.vn/AquaticPicture/v4.0.0/club1.png",
    img2: null,
    title: "DEVELOPMENT SQUAD",
    content:
      "The Development squad is for ages 9 and under. All swimmers must have a good basic knowledge of two or three strokes. More importantly, they must have a keen interest in learning more and great attitude to others and their own progression.",
    ages: "9& UNDER",
  },
  {
    img: "https://1cinnovation.vn/AquaticPicture/v4.0.0/club2.png",
    img2: purpleCup,
    title: "PURPLE SQUAD",
    content:
      "The Purple squad is for ages 9 to 11. The expectation is that all swimmers are technically efficient in at least three strokes. At the beginning of the year they will be assessed on potential, attitude, ability and speed.",
    ages: "9-11 YRS",
  },
  {
    img: "https://1cinnovation.vn/AquaticPicture/v4.0.0/club3.png",
    img2: bronzeCup,
    title: "BRONZE SQUAD",
    content:
      "The Bronze squad is for ages 11+. The main focus being on developing racing technique and ‘training to compete’. All swimmers need to have a good understanding of all strokes, turns and starts.",
    ages: "11+",
  },
  {
    img: "https://1cinnovation.vn/AquaticPicture/v4.0.0/club4.png",
    img2: silverCup,
    title: "SILVER SQUAD",
    content:
      "The Silver squad will focus primarily on technique, endurance and speed for ‘training to compete’. All swimmers need to swim all strokes at a good level. Swimmers will be able to compete in a range of strokes and distances at this level.",
    ages: "11+",
  },
  {
    img: "https://1cinnovation.vn/AquaticPicture/v4.0.0/club5.png",
    img2: goldCup,
    title: "GOLD SQUAD",
    content:
      "The top standard level is the Gold Squad. This squad is made up of advanced swimmers which are continuing the swimmer pathway of ‘training to compete’. Commitment to training and competition should be high and many advanced drills and techniques are learnt.",
    ages: "11+",
  },
  {
    img: "https://1cinnovation.vn/AquaticPicture/v4.0.0/club6.png",
    img2: eliteCup,
    title: "ELITE SQUAD",
    content:
      "Elite squad members focus on refining their skills into race efficiencies and striving towards National age-group qualifying times. The increased training regime allows swimmers to refine speed, technique, and stroke. This Squad will generally train daily and have individual nutrition and land trying programs as standard.",
    ages: "11+",
  },
];

export const dataNews = [
  // {
  //   title: "[NC Plus] 3 lỗi pin sạc dự phòng không sạc được",
  //   category: "Tutorial",
  //   labeldate: "27 th8",
  //   content:
  //     "NC Plus – Sạc vẫn lên đèn nhưng không vào pin ? Hay sạc đầy pin nhưng cắm vào máy thì lại không hiện sạc, thậm chí có hiện sạc nhưng thiết bị lại không lên pin ? Tất cả sẽ được giải đáp ngay trong post này và rất có thể sạc của bạn đang nằm ở tình trạng cuối.",
  //   date: "27/08/2024",
  //   author: "Nguyen Phuc",
  //   thumbnail:
  //     "https://i0.wp.com/ncplus.com.vn/wp-content/uploads/2024/08/NC-Plus-3-loi-pin-sac-du-phong-khong-sac-duoc.webp?resize=768%2C403&ssl=1",
  // },
  // {
  //   title:
  //     "[NC PLUS]#5 Bao Tay Chơi Game Chống Mồ Hôi NCPLUS: Giải Pháp Tối Ưu cho PUBG, Liên Quân, Free Fire",
  //   category: "Tutorial",
  //   content:
  //     "Trong thời đại công nghệ hiện nay, việc chơi game trên các thiết bị di động đã trở thành một phần không thể thiếu trong cuộc sống của nhiều người. Với những tựa game như PUBG, Liên Quân, Free Fire, yêu cầu về thao tác nhanh và chính xác là vô cùng quan trọng. Chính vì vậy, bao tay chơi game chống mồ hôi và bao tay cảm ứng chơi game đã ra đời nhằm hỗ trợ game thủ có những trải nghiệm tốt nhất. Những sản phẩm này không chỉ giúp giảm thiểu tác động của mồ hôi tay mà còn mang đến khả năng điều khiển vượt trội. Đặc biệt, các thương hiệu nổi tiếng như NCPLUS đang cung cấp nhiều loại bao tay chơi game chất lượng cao, đáp ứng đầy đủ các nhu cầu của game thủ.",
  //   date: "24/08/2024",
  //   labeldate: "24 th8",
  //   author: "Nguyen Phuc",
  //   thumbnail:
  //     "https://i0.wp.com/ncplus.com.vn/wp-content/uploads/2024/08/unnamed.webp?resize=768%2C400&ssl=1",
  // },
  // {
  //   title: "[NCPLUS]#4 Hướng Dẫn – Làm Sao Biết iPhone Đang Sạc Nhanh",
  //   category: "Tutorial",
  //   content:
  //     "Ncplus – Sạc nhanh đã trở thành một trong những tiêu chuẩn quan trọng khi lựa chọn mua smartphone ngày nay. Đối với iPhone, Apple đã tích hợp công nghệ sạc nhanh vào nhiều dòng sản phẩm của mình. Tuy nhiên, không phải ai cũng biết cách để xác định rằng iPhone của họ đang sạc nhanh hay không. Trong bài viết này, Ncplus sẽ giúp bạn tìm hiểu làm sao để biết iPhone đang sạc nhanh, và những yếu tố ảnh hưởng đến tốc độ sạc của thiết bị.",
  //   date: "21/07/2024",
  //   labeldate: "21 th7",
  //   author: "Nguyen Phuc",
  //   thumbnail:
  //     "https://i0.wp.com/ncplus.com.vn/wp-content/uploads/2024/08/Thumbnaill12-100.jpg?resize=800%2C188&ssl=1",
  // },
  // {
  //   title:
  //     "[NCPLUS]#3 Các Loại Dây Đeo Điện Thoại Trên Cổ Tiện Lợi Cho Người Dùng",
  //   category: "Tutorial",
  //   content:
  //     "NCplus Trong thế giới số hóa ngày nay, điện thoại di động giống như một người bạn đồng hành không thể thiếu của chúng ta. Nhưng làm thế nào để giữ cho người bạn này luôn bên mình một cách an toàn và tiện lợi? Đặc biệt là khi bạn đang di chuyển hoặc tham gia các hoạt động ngoài trời, việc này có thể trở nên khó khăn. Đó là lý do tại sao dây đeo điện thoại trên cổ đã trở thành một phụ kiện không thể thiếu. Nó giúp bạn giữ điện thoại một cách thuận tiện, đồng thời bảo vệ khỏi những rủi ro như rơi vỡ hay mất cắp. Trong bài viết này, chúng ta sẽ khám phá những loại dây đeo điện thoại trên cổ, đặc biệt là dây đeo NCplus – một trong những sản phẩm được yêu thích nhất hiện nay.",
  //   date: "10/02/2024",
  //   labeldate: "10 th2",
  //   author: "Nguyen Phuc",
  //   thumbnail:
  //     "https://i0.wp.com/ncplus.com.vn/wp-content/uploads/2024/08/Thumbnaill1-100.jpg?resize=800%2C188&ssl=1",
  // },
  // {
  //   title: "[NCPLUS]#2 Giới Thiệu Sản Phẩm Ốp iPhone Tai Thỏ",
  //   category: "Tutorial",
  //   content:
  //     "Chào mừng bạn đến với thế giới của NCPLUS – một thương hiệu nổi tiếng trong lĩnh vực phụ kiện điện thoại, được yêu thích bởi hàng triệu người dùng trên toàn cầu. Với sứ mệnh mang đến những sản phẩm hiện đại, tinh tế và tiện ích, NCPLUS luôn nỗ lực không ngừng để phát triển và cho ra mắt những sản phẩm mới, đáp ứng nhu cầu ngày càng cao của khách hàng. Trong lần giới thiệu này, chúng tôi rất vui mừng ra mắt dòng sản phẩm Ốp iPhone Tai Thỏ, với thiết kế độc đáo và chất liệu cao cấp.",
  //   date: "27/09/2024",
  //   labeldate: "27 th9",
  //   author: "Nguyen Phuc",
  //   thumbnail:
  //     "https://i0.wp.com/ncplus.com.vn/wp-content/uploads/2024/08/Thumbnaill-100-1.jpg?resize=800%2C188&ssl=1",
  // },
  // {
  //   title: "[NCPLUS]#1 Hướng Dẫn Khắc Phục Lỗi Khi Sạc Điện Thoại Bị Giảm Pin",
  //   category: "Tutorial",
  //   content:
  //     "Bạn có bao giờ gặp phải tình huống kỳ lạ khi sạc điện thoại bị giảm pin thay vì tăng lên? Đây là một vấn đề không hiếm gặp và có thể khiến bạn cảm thấy bực bội. Nhưng đừng lo, NCPLUS sẽ giúp bạn tìm hiểu lý do tại sao điều này xảy ra và cách khắc phục hiệu quả trong bài viết này.",
  //   date: "12/05/2024",
  //   labeldate: "12  th5",
  //   author: "Nguyen Phuc",
  //   thumbnail:
  //     "https://i0.wp.com/ncplus.com.vn/wp-content/uploads/2024/08/Thumbnaill-100.jpg?resize=800%2C188&ssl=1",
  // },
];

export const dataLevel = [
  {
    img: imgstartfish,
    title: "Starfish",
    description:
      "The introductory level develops water confidence through balance and submerging. It is the perfect start point for first time and hesitant swimmers",
  },
  {
    img: imgseahorse,
    title: "Seahorse",
    description:
      "The importance of breathing and floating are the main building blocks in this level which are essential for future strokes",
  },
  {
    img: imgseal,
    title: "Seal",
    description:
      "Body position and streamlining are practiced with basic movement in front crawl and backstroke.",
  },
  {
    img: imgbarracuda,
    title: "Barracuda",
    description:
      "The introductory level develops water confidence through balance and submerging. It is the perfect start point for first time and hesitant swimmers",
  },
  {
    img: imgswordfish,
    title: "Swordfish",
    description:
      "Breathing patterns and length of stroke are practiced in front crawl and backstroke. Basic timing for butterfly and breaststroke is also learnt.",
  },
  {
    img: imgdolphin,
    title: "Dolphin",
    description:
      "Learn skills to improve rhythm and timing for all strokes with correct turns and advanced starts.",
  },
];
export const quizSet = [
  {
    question:
      "Are you comfortable putting your face in the water? / Can you swim without arm bands?",
    options: ["Yes", "No", "", "", ""],
  },
  {
    question:
      "Can you float on your back and on your front by yourself? / Can you kick on your front and back without a float device?",
    options: ["Yes", "No", "", "", ""],
  },
  {
    question:
      "Can you swim in the deep end of the pool? / Can you swim on your back for 25m?",
    options: ["Yes", "No", "", "", ""],
  },
  {
    question: "Can you swim 25m front crawl breathing on your side for 25m?",
    options: ["Yes", "No", "", "", ""],
  },
  {
    question:
      "Can you swim 50m front crawl? / Can you swim 50m backstroke? / Can you swim 50m breaststroke?",
    options: ["Yes", "No", "", "", ""],
  },
  {
    question:
      "Can you swim four strokes effortlessly? / Can you dive and do correct stroke turns?",
    options: ["Yes", "No", "", "", ""],
  },
  {
    question:
      "Do you want to refine all strokes, turns and skills related to swimming proficiency?",
    options: ["Yes", "No", "", "", ""],
  },
];

export const columnsAutumn = [
  { key: "perWeek", title: "Per week", dataIndex: "perWeek" },
  { key: "squad", title: "Squad", dataIndex: "squad" },
  {
    key: "information",
    title: "Information",
    dataIndex: "information",
  },
  {
    key: "autumnSession",
    title: "Autumn Session",
    dataIndex: "autumnSession",
  },
  { key: "costMonth", title: "Cost/ month", dataIndex: "costMonth" },
  {
    key: "sessionMonth",
    title: "Sessions/ month",
    dataIndex: "sessionMonth",
  },
  { key: "perSession", title: "Per Session", dataIndex: "perSession" },
];

export const dataAutumn = [
  {
    key: "1",
    perWeek: "2 Sessions",
    squad: "n/a",
    information: "3 Months - 12 Weeks",
    autumnSession: "n/a",
    costMonth: "n/a",
    sessionMonth: "8",
    perSession: 250000,
  },
  {
    key: "2",
    perWeek: "3 Sessions",
    squad: "n/a",
    information: "3 Months - 12 Weeks",
    autumnSession: "n/a",
    costMonth: "n/a",
    sessionMonth: "12",
    perSession: 167000,
  },
  {
    key: "3",
    perWeek: "4 Sessions",
    squad: "Dev, Bl, Br, S, G",
    information: "3 Months - 12 Weeks",
    autumnSession: 6000000,
    costMonth: 2000000,
    sessionMonth: "16",
    perSession: 125000,
  },
  {
    key: "4",
    perWeek: "5 Sessions",
    squad: "Bl, Br, S, G, E",
    information: "3 Months - 12 Weeks",
    autumnSession: 7500000,
    costMonth: 2500000,
    sessionMonth: "20",
    perSession: 125000,
  },
  {
    key: "5",
    perWeek: "7 Sessions",
    squad: "Elite ",
    information: "3 Months - 12 Weeks",
    autumnSession: 9000000,
    costMonth: 3000000,
    sessionMonth: "28",
    perSession: 107000,
  },
];

export const columnsWinter = [
  { key: "perWeek", title: "Per week", dataIndex: "perWeek" },
  { key: "squad", title: "Squad", dataIndex: "squad" },
  {
    key: "information",
    title: "Information",
    dataIndex: "information",
  },
  {
    key: "winterSession",
    title: "Winter Session",
    dataIndex: "winterSession",
  },
  { key: "costMonth", title: "Cost/ month", dataIndex: "costMonth" },
  {
    key: "sessionMonth",
    title: "Sessions/ month",
    dataIndex: "sessionMonth",
  },
  { key: "perSession", title: "Per Session", dataIndex: "perSession" },
];

export const dataWinter = [
  {
    key: "1",
    perWeek: "2 Sessions",
    squad: "n/a",
    information: "2.5 Months - 10 Weeks",
    winterSession: "n/a",
    costMonth: "n/a",
    sessionMonth: "8",
    perSession: 250000,
  },
  {
    key: "2",
    perWeek: "3 Sessions",
    squad: "n/a",
    information: "2.5 Months - 10 Weeks",
    winterSession: "n/a",
    costMonth: "n/a",
    sessionMonth: "12",
    perSession: 167000,
  },
  {
    key: "3",
    perWeek: "4 Sessions",
    squad: "Dev, Bl, Br, S, G",
    information: "2.5 Months - 10 Weeks",
    winterSession: 5000000,
    costMonth: 2000000,
    sessionMonth: "16",
    perSession: 125000,
  },
  {
    key: "4",
    perWeek: "5 Sessions",
    squad: "Bl, Br, S, G, E",
    information: "2.5 Months - 10 Weeks",
    winterSession: 6250000,
    costMonth: 2500000,
    sessionMonth: "20",
    perSession: 125000,
  },
  {
    key: "5",
    perWeek: "7 Sessions",
    squad: "Elite ",
    information: "2.5 Months - 10 Weeks",
    winterSession: 7500000,
    costMonth: 3000000,
    sessionMonth: "28",
    perSession: 107000,
  },
];

export const columnsSpring = [
  { key: "perWeek", title: "Per week", dataIndex: "perWeek" },
  { key: "squad", title: "Squad", dataIndex: "squad" },
  {
    key: "information",
    title: "Information",
    dataIndex: "information",
  },
  {
    key: "springSession",
    title: "Sping Session",
    dataIndex: "springSession",
  },
  { key: "costMonth", title: "Cost/ month", dataIndex: "costMonth" },
  {
    key: "sessionMonth",
    title: "Sessions/ month",
    dataIndex: "sessionMonth",
  },
  { key: "perSession", title: "Per Session", dataIndex: "perSession" },
];

export const dataSpring = [
  {
    key: "1",
    perWeek: "2 Sessions",
    squad: "n/a",
    information: "4 Months - 15 Weeks",
    springSession: "n/a",
    costMonth: "n/a",
    sessionMonth: "8",
    perSession: 250000,
  },
  {
    key: "2",
    perWeek: "3 Sessions",
    squad: "n/a",
    information: "4 Months - 15 Weeks",
    springSession: "n/a",
    costMonth: "n/a",
    sessionMonth: "12",
    perSession: 167000,
  },
  {
    key: "3",
    perWeek: "4 Sessions",
    squad: "Dev, Bl, Br, S, G",
    information: "4 Months - 15 Weeks",
    springSession: 8000000,
    costMonth: 2000000,
    sessionMonth: "16",
    perSession: 125000,
  },
  {
    key: "4",
    perWeek: "5 Sessions",
    squad: "Bl, Br, S, G, E",
    information: "4 Months - 15 Weeks",
    springSession: 10000000,
    costMonth: 2500000,
    sessionMonth: "20",
    perSession: 125000,
  },
  {
    key: "5",
    perWeek: "7 Sessions",
    squad: "Elite ",
    information: "4 Months - 15 Weeks",
    springSession: 12000000,
    costMonth: 3000000,
    sessionMonth: "28",
    perSession: 107000,
  },
];

export const dataSOF = [
  {
    time: "3 MONTHS",
    LessonWeek: "1 LESSON/WEEK",
    Unlimited: "",
    Free: "",
    price: "3.000.000 VND",
  },
  {
    time: "3 MONTHS PLUS",
    LessonWeek: "1 LESSON/WEEK",
    Unlimited: "UNLIMITED SWIMMING",
    Free: "",
    price: "5.000.000 VND",
  },
  {
    time: "3 MONTHs ALT",
    LessonWeek: "2 LESSON/WEEK",
    Unlimited: "",
    Free: "",
    price: "4.500.000 VND",
  },
  {
    time: "3 MONTHs MAX",
    LessonWeek: "2 LESSON/WEEK",
    Unlimited: "UNLIMITED SWIMMING",
    Free: "",
    price: "6.500.000 VND",
  },
  {
    time: "12 MONTHS",
    LessonWeek: "1 LESSON/WEEK",
    Unlimited: "UNLIMITED SWIMMING",
    Free: "2 MONTHS FREE",
    price: "16.700.000 VND",
  },
  {
    time: "12 MONTHs MAX",
    LessonWeek: "2 LESSON/WEEK",
    Unlimited: "UNLIMITED SWIMMING",
    Free: "2 MONTHS FREE",
    price: "21.700.000 VND",
  },
];

export const dataSourcePay = [
  {
    key: "Time_1_Child",
    tiket_type: "1x Child Ticket (3-16 yrs)",
    price: "120,000",
    details: "For children aged 3-16 years",
  },
  {
    key: "Time_10_Child",
    tiket_type: "10x Child Tickets (3-16 yrs)",
    price: "1,000,000",
    details: "10 tickets for Children (3-16 years)",
  },
  {
    key: "Month_3_Child",
    tiket_type: "3 month Child Tickets (3-16 yrs)",
    price: "3,000,000",
    details: "3 month tickets for Children (3-16 years)",
  },
  {
    key: "Month_12_Child",
    tiket_type: "12 month Child Tickets (3-16 yrs)",
    price: "9,000,000",
    details: "12 month tickets for Children (3-16 years)",
  },

  {
    key: "Time_1_Adult",
    tiket_type: "1x Adult Ticket",
    price: "150,000",
    details: "for adults",
  },

  {
    key: "Time_10_Adult",
    tiket_type: "10x Adult Tickets ",
    price: "1,200,000",
    details: "10 tickets for adults",
  },
  {
    key: "Month_3_Adult",
    tiket_type: "3 month adult Tickets ",
    price: "4,000,000",
    details: "3 month tickets for adult",
  },
  {
    key: "Month_12_Adult",
    tiket_type: "12 month adult Tickets ",
    price: "12,000,000",
    details: "12 month tickets for adult",
  },
];

export const dataSourceChildrenSwimmingLesson = [
  {
    key: "Month_3",
    plan: "Basic Plan",
    features: "No",
    price: "3,000,000",
  },

  {
    key: "Month_3_Alt",
    plan: "Basic Swim Freedom Plan",
    features: "Unlimited swimming",
    price: "5,000,000",
  },

  {
    key: "Month_3_Plus",
    plan: "Intermediate Plan",
    features: "No",
    price: "4,500,000",
  },

  {
    key: "Month_3_Max",
    plan: "Intermediate Swim Freedom",
    features: "Unlimited swimming",
    price: "6,500,000",
  },
  {
    key: "Month_12",
    plan: "Annual Swim Freedom Plan",
    features: "Unlimited swimming save 5,300,000 VND",
    price: "16,700,000",
  },
  {
    key: "Month_12_Max",
    plan: "Annual Intermediate Swim Freedom Plan",
    features: "Unlimited swimming save 5,500,000 VND",
    price: "21,700,000",
  },
];
export const dataSourceClub = [
  {
    key: "Month_1",
    plan: "Trial Training Package",
    features: "Unlimited training",
    price: "2,500,000",
  },
  {
    key: "Month_3",
    plan: "Short-Term Swim Freedom",
    features: "Unlimited training + Unlimited swimming",
    price: "7,500,000",
  },
  {
    key: "Month_12",
    plan: "12 Month Unlimited Training",
    features: "Unlimited training + Unlimited swimming",
    price: "25,000,000",
  },
];
export const dataSourceAdult = [
  {
    key: "Month_3",
    plan: "Essential Package",
    features: "No",
    price: "3.600.000",
  },
  {
    key: "Month_3_Plus",
    plan: "Swim Freedom Package",
    features: "Unlimited swimming",
    price: "6.000.000",
  },
  {
    key: "Month_3_Premium",
    plan: "Unlimited Dive Package",
    features:
      "Unlimited swimming + Unlimited course/ week + Unlimited cold plunge",
    price: "9.000.000",
  },
  {
    key: "Month_12",
    plan: "Annual Saver Package",
    features: "Unlimited swimming Save 8,400,000",
    price: "20.000.000",
  },
  {
    key: "Month_12_Premium",
    plan: "Ultimate Aquatics Package",
    features:
      "Unlimited swimming + Unlimited course/ week + Unlimited cold plunge + Save 6,000,000 VND",
    price: "30.000.000",
  },
];
export const dataColdPlunge = [
  {
    plan: "1 ticket",
    features: "No",
    price: "250,000",
  },
  {
    plan: "10 ticket",
    features: "No",
    price: "250,000",
  },
];

export const servicePackagesData = [
  // Children Swimming Lesson
  {
    serviceName: "Children Swimming Lesson",
    packageName: "Basic Plan",
    price: 3000000,
    schedule: "1 period/week",
    time: "3 months",
    benefits: "No",
  },
  {
    serviceName: "Children Swimming Lesson",
    packageName: "Basic Swim Freedom Plan",
    price: 5000000,
    schedule: "1 period/week",
    time: "3 months",
    benefits: "Unlimited swimming",
  },
  {
    serviceName: "Children Swimming Lesson",
    packageName: "Intermediate Plan",
    price: 4500000,
    schedule: "2 periods/week",
    time: "3 months",
    benefits: "No",
  },
  {
    serviceName: "Children Swimming Lesson",
    packageName: "Intermediate Swim Freedom",
    price: 6500000,
    schedule: "2 periods/week",
    time: "3 months",
    benefits: "Unlimited swimming",
  },
  {
    serviceName: "Children Swimming Lesson",
    packageName: "Annual Swim Freedom Plan",
    price: 16700000,
    schedule: "1 period/week",
    time: "12 months",
    benefits: "Unlimited swimming\nSave 5,300,000 VND",
  },
  {
    serviceName: "Children Swimming Lesson",
    packageName: "Annual Intermediate Swim Freedom Plan",
    price: 21700000,
    schedule: "2 periods/week",
    time: "12 months",
    benefits: "Unlimited swimming\nSave 5,500,000 VND",
  },

  // Adult Swimming Course
  {
    serviceName: "Adult Swimming Course",
    packageName: "Essential Package",
    price: 3600000,
    schedule: "1 period/week",
    time: "3 months",
    benefits: "No",
  },
  {
    serviceName: "Adult Swimming Course",
    packageName: "Swim Freedom Package",
    price: 6000000,
    schedule: "1 period/week",
    time: "3 months",
    benefits: "Unlimited swimming",
  },
  {
    serviceName: "Adult Swimming Course",
    packageName: "Unlimited Dive Package",
    price: 9000000,
    schedule: "Unlimited period/week",
    time: "3 months",
    benefits:
      "Unlimited swimming\nUnlimited course/ week\nUnlimited cold plunge",
  },
  {
    serviceName: "Adult Swimming Course",
    packageName: "Annual Saver Package",
    price: 20000000,
    schedule: "1 period/week",
    time: "12 months",
    benefits: "Unlimited swimming\nSave 8,400,000 VND",
  },
  {
    serviceName: "Adult Swimming Course",
    packageName: "Ultimate Aquatics Package",
    price: 30000000,
    schedule: "Unlimited period/week",
    time: "12 months",
    benefits:
      "Unlimited swimming\nUnlimited course/ week\nUnlimited cold plunge\nSave 6,000,000 VND",
  },
];
