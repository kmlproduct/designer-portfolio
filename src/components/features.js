import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBuildingFlag,
  faPenNib,
  faCode,
} from "@fortawesome/free-solid-svg-icons";
export default function Features() {
  const dataIcons = [
    {
      title: "تصميم المواقع",
      content:
        "تصميم موقع تعريفي بالشركة من خلال كتابة الكود يدويا دون استعمال اي برامج او مواقع وتسليمك الملفات الاصلية html&css&javascript ورفع موقعك على استضافة من hostinger و حجز دومين خاص بك.",
      icon: faCode,
    },
    {
      title: "تصميم الهوية البصرية",
      content:
        "من خلال مجال عملك واسم مؤسستك يمكنني تصميم شعاراحترافي بفكرة ابداعية ويحمل رسالة معينة دون تقليد او اقتباس من اي شعار قديم واستخراج الالوان الاساسية والثانوية للهوية مع تسليم جميع الملفات الاصلية للشعار بجميع الصيغ وبجودة عالية قابلة للطباعة.",
      icon: faBuildingFlag,
    },
    {
      title: "تصميم الشعار",
      content:
        "من خلال مجال عملك واسم مؤسستك يمكنني تصميم شعاراحترافي بفكرة ابداعية ويحمل رسالة معينة دون تقليد او اقتباس من اي شعار قديم واستخراج الالوان الاساسية والثانوية للهوية مع تسليم جميع الملفات الاصلية للشعار بجميع الصيغ وبجودة عالية قابلة للطباعة.",
      icon: faPenNib,
    },
  ];
  return (
    <div className="container-features">
      {dataIcons.map((dataIcon) => (
        <section>
          <span>
            <FontAwesomeIcon icon={dataIcon.icon} />
          </span>
          <h1>{dataIcon.title}</h1>
          <p>{dataIcon.content}</p>
        </section>
      ))}
    </div>
  );
}
