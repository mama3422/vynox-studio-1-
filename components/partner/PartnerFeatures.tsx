const icons: Array<(props: { className?: string }) => JSX.Element> = [
  // مجتمع متكامل — people
  ({ className }) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className}>
      <circle cx="9" cy="8" r="3" />
      <path d="M3.5 19c0-3 2.5-5 5.5-5s5.5 2 5.5 5" strokeLinecap="round" />
      <circle cx="17" cy="9" r="2.3" />
      <path d="M15.5 19c.3-2 1.7-3.5 3.5-3.9" strokeLinecap="round" />
    </svg>
  ),
  // التعرف على أصدقاء جدد — handshake / connection
  ({ className }) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className}>
      <path d="M8 12l3 3 5-6" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="12" cy="12" r="9" />
    </svg>
  ),
  // إضافات وخدمات مفيدة — puzzle piece
  ({ className }) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className}>
      <path d="M4 9h3.2c.3-1 1.1-1.7 2.1-1.7s1.8.7 2.1 1.7H14a1 1 0 0 1 1 1v2.7c1 .3 1.7 1.1 1.7 2.1s-.7 1.8-1.7 2.1V20a1 1 0 0 1-1 1H4v-3.2c1-.3 1.7-1.1 1.7-2.1S5 13.9 4 13.6V9z" strokeLinejoin="round" />
    </svg>
  ),
  // فعاليات ومجتمع نشط — calendar with a spark
  ({ className }) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className}>
      <rect x="3.5" y="5" width="17" height="15" rx="2" />
      <path d="M3.5 9.5h17M8 3v4M16 3v4" strokeLinecap="round" />
      <path d="M12 12.5l1 2 2 1-2 1-1 2-1-2-2-1 2-1z" strokeLinejoin="round" />
    </svg>
  ),
  // دعم وتواصل — headset
  ({ className }) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className}>
      <path d="M4 13v-1a8 8 0 0 1 16 0v1" strokeLinecap="round" />
      <rect x="3" y="13" width="4" height="5" rx="1.3" />
      <rect x="17" y="13" width="4" height="5" rx="1.3" />
      <path d="M19 18v1a3 3 0 0 1-3 3h-2" strokeLinecap="round" />
    </svg>
  ),
  // تجربة Discord مميزة — sparkles
  ({ className }) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className}>
      <path d="M12 4l1.4 3.6L17 9l-3.6 1.4L12 14l-1.4-3.6L7 9l3.6-1.4L12 4z" strokeLinejoin="round" />
      <path d="M18.5 15l.7 1.8L21 17.5l-1.8.7-.7 1.8-.7-1.8-1.8-.7 1.8-.7z" strokeLinejoin="round" />
    </svg>
  ),
];

const features = [
  {
    title: "مجتمع متكامل",
    desc: "بيئة تجمع الجميع تحت سقف واحد، من الأعضاء الجدد إلى الأصدقاء القدامى.",
  },
  {
    title: "التعرف على أصدقاء جدد",
    desc: "قنوات وفعاليات مصممة لتسهيل التواصل والتعارف بين الأعضاء.",
  },
  {
    title: "إضافات وخدمات مفيدة",
    desc: "مجموعة من الإضافات والخدمات الرقمية التي تضيف قيمة حقيقية لتجربتك.",
  },
  {
    title: "فعاليات ومجتمع نشط",
    desc: "فعاليات ونشاطات دورية تبقي المجتمع حيًا ومتفاعلًا باستمرار.",
  },
  {
    title: "دعم وتواصل",
    desc: "فريق دعم متجاوب جاهز للمساعدة والإجابة على استفساراتك في أي وقت.",
  },
  {
    title: "تجربة Discord مميزة",
    desc: "تنظيم احترافي للقنوات والأدوار يمنحك تجربة استخدام سلسة وممتعة.",
  },
];

export default function PartnerFeatures() {
  return (
    <section id="features" className="relative py-20 sm:py-28">
      <div className="container-px mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <span className="ember-eyebrow mx-auto justify-center">
            <span className="h-1 w-6 rounded-full bg-gradient-to-l from-ember-400 to-blush-500" />
            المميزات
          </span>
          <h2 className="font-heading mt-4 text-3xl font-bold sm:text-4xl">
            كل ما يحتاجه مجتمع رقمي متكامل
          </h2>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = icons[index];
            return (
              <div
                key={feature.title}
                className="ember-card group relative overflow-hidden p-7 hover:-translate-y-1.5 hover:border-ember-400/40"
              >
                <div className="absolute -end-10 -top-10 h-32 w-32 rounded-full bg-ember-400/0 blur-2xl transition-colors duration-500 group-hover:bg-ember-400/15" />
                <div className="relative flex h-12 w-12 items-center justify-center rounded-xl border border-ember-400/20 bg-ember-400/10 text-ember-300 transition-transform duration-500 group-hover:scale-110">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="relative mt-5 text-lg font-semibold text-white">
                  {feature.title}
                </h3>
                <p className="relative mt-2.5 text-sm leading-relaxed text-white/60">
                  {feature.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
