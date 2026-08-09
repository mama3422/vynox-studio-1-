const points = [
  { title: "بيئة نشطة", desc: "قنوات وفعاليات حيّة على مدار الأسبوع." },
  { title: "تفاعل حقيقي", desc: "أعضاء متفاعلون، لا حسابات صامتة." },
  { title: "إضافات مفيدة", desc: "خدمات وأدوات رقمية تضيف قيمة فعلية." },
];

export default function PartnerAbout() {
  return (
    <section id="about" className="relative py-20 sm:py-28">
      <div className="container-px mx-auto max-w-5xl">
        <div className="text-center">
          <span className="ember-eyebrow mx-auto justify-center">
            <span className="h-1 w-6 rounded-full bg-gradient-to-l from-ember-400 to-blush-500" />
            عن المجتمع
          </span>
          <h2 className="font-heading mt-4 text-3xl font-bold leading-tight sm:text-4xl">
            بيئة تجمع المجتمع والخدمات في مكان واحد
          </h2>
        </div>

        <div className="mt-10 space-y-5 text-center">
          <p className="mx-auto max-w-3xl text-base leading-relaxed text-white/70">
            وَهـج ليس مجرد سيرفر Discord عادي، بل مساحة مصممة لتجمع الأشخاص
            المهتمين بالتقنية والألعاب والمجتمعات الرقمية في بيئة واحدة نشطة
            ومرتبة. من خلال قنوات تفاعلية، وفعاليات دورية، ونظام إضافات
            وخدمات مفيدة، يوفر وَهـج تجربة تجمع بين المتعة الاجتماعية
            والفائدة العملية.
          </p>
          <p className="mx-auto max-w-3xl text-base leading-relaxed text-white/70">
            سواء كنت تبحث عن أصدقاء جدد يشاركونك اهتماماتك، أو خدمات وإضافات
            تسهّل تجربتك الرقمية، أو ببساطة مجتمعًا نشطًا تنتمي إليه، فإن
            وَهـج مصمم ليكون وجهتك المناسبة.
          </p>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-3">
          {points.map((point) => (
            <div key={point.title} className="ember-card p-5 text-center sm:text-start">
              <div className="mx-auto flex h-9 w-9 items-center justify-center rounded-lg bg-ember-400/10 text-ember-300 sm:mx-0">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5">
                  <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <p className="mt-3 text-sm font-semibold text-white">{point.title}</p>
              <p className="mt-1.5 text-sm leading-relaxed text-white/60">{point.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
