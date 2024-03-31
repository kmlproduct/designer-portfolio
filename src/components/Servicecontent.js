import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBuildingFlag,
  faPenNib,
  faCode,
} from "@fortawesome/free-solid-svg-icons";
export default function ServiceContent() {
  const dataservicecontent = [
    {
      image: "/imgs/image-1.jpeg",
      icon: faPenNib,
      h1: "تصميم شعار",
      p: "صميم شعار خاص بتوصيل الطلبيات: تم دمج حرف الجيم و حرف j الانجليزي معا ليشكلا اهم جزء في الشعار",
    },
    {
      image: "/imgs/image-1.jpeg",
      icon: faCode,
      h1: "بوست انستاغرام",
      p: "لعل الاعلان في وقتنا الحالي اصبح من الضروري استغلال وسائل التواصل لنشر اعمالنا والتعريف بها لجدب عملاء جدد.",
    },
    {
      image: "/imgs/image-1.jpeg",
      icon: faBuildingFlag,
      h1: "تصميم بانر بترياق",
      p: "من اهم عناصر الهوية , البانر الذي يلعب دورا مهما في جذب انتباه المارة او اثناء اللقاءات او المعارض , واعطائهم فكرة عامة وسريعة عن خدمات الشركة وبطريقة احترافية,",
    },
    {
      image: "/imgs/image-1.jpeg",
      icon: faCode,
      h1: "تصميم بادج الموظف",
      p: "يمكن بادج الموظف من تعرف العملاء بسهولة على الموظف الذي يقدم الخدمة, كما يعطي مصداقية للشركة والتعريف بها مباشرة خلال اي لقاء مع العملاء",
    },
  ];
  return (
    <div className="service-content">
      {dataservicecontent.map((data) => (
        <div className="card">
          <div className="img">
            <img src={data.image} alt="" />
          </div>
          <div className="content-card">
            <span>{<FontAwesomeIcon icon={data.icon} />}</span>
            <h1>{data.h1}</h1>
            <p>{data.p}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
