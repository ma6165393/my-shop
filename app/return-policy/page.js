import '../_components/products.css';
import Footer from "../_components/Footer";
import Header from '../_components/Heder';

export default function ReturnPolicy() {
  return (
    <div className="flex flex-col min-h-screen font-cairo">
      <Header /> {/* الهيدر */}

      <main className="flex-grow card mt-7 p-6 max-w-3xl mx-auto text-right" dir="rtl">
        <h1 className="text-2xl font-bold mb-6 text-center">
          سياسة الاسترجاع والاستبدال والاستكمال
        </h1>

        <section className="mb-6">
          <p className="leading-7 mb-3">
            نضمن لك <strong>7 أيام ضمان للاسترجاع</strong>. 
            في حالة عدم رضاك عن المنتج يمكنك استرجاعه بسهولة.
          </p>
          <p className="leading-7 mb-3">
            في حالة الاسترجاع، يتم إعادة المبلغ كاملًا إلى حسابك البنكي في نفس اليوم
            بعد استلام المنتج وفحصه.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-3">شروط الاسترجاع:</h2>
          <ul className="list-none space-y-2">
            <li>أن يكون المنتج في حالته الأصلية دون استخدام.</li>
            <li>الاسترجاع متاح خلال 7 أيام فقط من تاريخ الاستلام.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3">الاستبدال والاستكمال:</h2>
          <ul className="list-none space-y-2">
            <li>يمكنك استبدال المنتج بمنتج آخر خلال فترة الضمان.</li>
            <li>في حالة وجود عيب مصنعي، يتم استبدال المنتج أو استكمال القطعة الناقصة مجانًا.</li>
            <li>لا يتم فرض أي رسوم إضافية على عمليات الاستبدال أو الاستكمال.</li>
          </ul>
        </section>
      </main>

      <Footer /> {/* الفوتر */}
    </div>
  );
}
