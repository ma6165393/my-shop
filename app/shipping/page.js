// app/shipping/page.js
import Header from "../_components/Heder";
import '../_components/products.css';
import Footer from "../_components/Footer";


export default function ShippingNotes() {
  return (
    <>
      <Header /> {/* الهيدر فوق الصفحة */}
      <main className="card mt-10 p-6 max-w-3xl mx-auto font-cairo" dir="rtl">
        <h1 className="text-2xl font-bold mb-4 text-center">ملاحظات الشحن</h1>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">تأكيد الطلب</h2>
          <p className="leading-7">
            في خلال <strong>24 ساعة</strong> من تسجيل الطلب يقوم فريق التأكيدات
            بتأكيد الطلب من خلال مكالمة تأكيدية مع العميل يتم فيها التأكيد على
            بيانات العميل واسم المنتج فقط، ويكون توقيت المكالمات من الساعة{" "}
            <strong>٩ صباحًا وحتى ٥ مساءًا</strong>.
          </p>
          <p className="leading-7 mt-2">
            في حالة تسجيل الطلب على الموقع قبل الساعة <strong>٣ عصرًا</strong> يتم
            تأكيد الأوردر في نفس اليوم ليخرج للتسليم في اليوم التالي، وفي حالة
            التسجيل بعد الساعة ٣ عصرًا يتم تأكيده في اليوم التالي ليخرج للتسليم
            في اليوم الذي يليه.
          </p>
          <p className="leading-7 mt-2">
            في حالة عدم الرد على المكالمة التأكيدية الأولى، بيتم المحاولة مع العميل
            مرة أخرى في نفس اليوم. في حالة عدم الرد في المرتين نقوم بمحاولة ثالثة
            ورابعة في اليوم التالي حتى يتم الرد. في حالة عدم الرد نقوم بمحاولة
            خامسة وسادسة وسابعة في اليوم الثالث، يتم تعليق الطلب بعد نفاذ جميع
            المحاولات السبع.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">مواعيد التوصيل في المملكة</h2>
          <p className="leading-7">المملكة مقسمة إلى مناطق قريبة وبعيدة.</p>
          <ul className="list-disc pr-6 mt-2 space-y-1">
            <li className="list-none">
              <strong>المناطق القريبة (رياض ، جدة ، دمام):</strong> التوصيل في خلال{" "}
              <strong>2-3 أيام</strong>.
            </li>
            <li className="list-none">
              <strong>المناطق البعيدة:</strong> التوصيل في خلال{" "}
              <strong>4-5 أيام</strong>.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">أسعار الشحن في السعودية</h2>
          <p className="leading-7">
            الشحن <strong>مجانا</strong> لكل مناطق المملكة.
          </p>
        </section>
      </main>
     <Footer />

    </>
  );
}
