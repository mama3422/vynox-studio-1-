export type Locale = "ar" | "en";

export interface Translations {
  meta: { title: string; description: string };
  nav: {
    home: string;
    about: string;
    services: string;
    why: string;
    contact: string;
    cta: string;
  };
  hero: {
    eyebrow: string;
    heading: string;
    body: string;
    ctaPrimary: string;
    ctaSecondary: string;
    tagFiveM: string;
    tagDiscord: string;
    tagWeb: string;
    tagAutomation: string;
  };
  about: {
    eyebrow: string;
    heading: string;
    body1: string;
    body2: string;
    points: { title: string; desc: string }[];
  };
  services: {
    eyebrow: string;
    heading: string;
    subheading: string;
    items: { title: string; desc: string }[];
  };
  why: {
    eyebrow: string;
    heading: string;
    items: { title: string; desc: string }[];
  };
  stats: {
    heading: string;
    items: { value: string; label: string }[];
  };
  contact: {
    eyebrow: string;
    heading: string;
    subheading: string;
    body: string;
    discord: string;
    contact: string;
    request: string;
  };
  requestModal: {
    title: string;
    discord: string;
    whatsapp: string;
    close: string;
  };
  footer: {
    tagline: string;
    linksHeading: string;
    home: string;
    services: string;
    about: string;
    contact: string;
    discord: string;
    rights: string;
  };
  visitors: string;
}

export const translations: Record<Locale, Translations> = {
  ar: {
    meta: {
      title: "Vynox Studio — استوديو تطوير رقمي احترافي",
      description:
        "Vynox Studio هو استوديو متخصص في تطوير حلول FiveM وDiscord والبرمجيات المخصصة والمواقع الإلكترونية، بجودة عالية وأداء موثوق.",
    },
    nav: {
      home: "الرئيسية",
      about: "من نحن",
      services: "خدماتنا",
      why: "لماذا Vynox",
      contact: "تواصل معنا",
      cta: "ابدأ مشروعك",
    },
    hero: {
      eyebrow: "استوديو تطوير رقمي",
      heading: "نبتكر الحلول، ونحوّل الأفكار إلى واقع",
      body: "Vynox Studio هو استوديو متخصص في تطوير حلول FiveM وDiscord والبرمجيات المخصصة، نركز على الجودة، الأداء، والابتكار لتقديم تجارب رقمية متكاملة.",
      ctaPrimary: "استكشف خدماتنا",
      ctaSecondary: "تواصل معنا",
      tagFiveM: "FiveM",
      tagDiscord: "Discord",
      tagWeb: "الويب",
      tagAutomation: "الأتمتة",
    },
    about: {
      eyebrow: "من نحن",
      heading: "استوديو بُني على الدقة والالتزام التقني",
      body1: "Vynox Studio استوديو تطوير رقمي يقدّم حلولًا مخصصة تُبنى حول احتياج كل عميل، بدءًا من أنظمة FiveM المتقدمة، مرورًا ببوتات وأنظمة Discord الذكية، وصولًا إلى المواقع الإلكترونية والبرمجيات المخصصة وحلول الأتمتة.",
      body2: "نتعامل مع كل مشروع كنظام متكامل: تخطيط واضح، كتابة كود نظيف وقابل للصيانة، واختبار دقيق قبل التسليم. هدفنا بناء علاقة عمل طويلة المدى قائمة على الثقة والجودة الفعلية، لا الوعود المبالغ فيها.",
      points: [
        { title: "هندسة نظيفة", desc: "كود منظم وقابل للتوسّع في كل مشروع." },
        { title: "تواصل مباشر", desc: "متابعة واضحة معك في كل مرحلة من التطوير." },
        { title: "تسليم مسؤول", desc: "اختبار شامل قبل تسليم أي نظام أو منتج." },
      ],
    },
    services: {
      eyebrow: "خدماتنا",
      heading: "حلول تقنية متكاملة تحت سقف واحد",
      subheading: "من فكرة أولية إلى نظام جاهز للعمل — نغطي كامل دورة التطوير.",
      items: [
        {
          title: "تطوير FiveM",
          desc: "أنظمة وسكربتات وواجهات مخصصة لخوادم FiveM، مبنية للأداء والاستقرار على المدى الطويل.",
        },
        {
          title: "تطوير Discord",
          desc: "بوتات Discord احترافية، أنظمة أتمتة، أدوات إدارة، وتكاملات مخصصة بحسب احتياج مجتمعك.",
        },
        {
          title: "تطوير المواقع",
          desc: "مواقع وتطبيقات ويب حديثة، سريعة الأداء، ومتجاوبة بالكامل مع جميع الأجهزة.",
        },
        {
          title: "برمجة مخصصة",
          desc: "برمجيات وحلول مخصصة تُبنى بالكامل وفق متطلبات العميل وطبيعة عمله.",
        },
        {
          title: "الأتمتة",
          desc: "أنظمة أتمتة تبسّط المهام المتكررة وتحسّن سير العمل داخل فريقك أو مجتمعك.",
        },
        {
          title: "حلول رقمية",
          desc: "حلول تقنية مصمّمة خصيصًا حول احتياجات عملك أو مجتمعك، من الفكرة حتى التنفيذ.",
        },
      ],
    },
    why: {
      eyebrow: "لماذا Vynox Studio",
      heading: "معايير نلتزم بها في كل مشروع",
      items: [
        { title: "جودة عالية", desc: "معايير صارمة في الكود والتصميم في كل تسليم." },
        { title: "حلول مخصصة", desc: "كل مشروع يُبنى خصيصًا حول احتياجك، لا قوالب جاهزة." },
        { title: "تقنيات حديثة", desc: "أدوات وأطر عمل حديثة تضمن أداءً واستقرارًا أفضل." },
        { title: "التركيز على الأداء", desc: "أنظمة سريعة ومستقرة مبنية لتتحمل الاستخدام الفعلي." },
        { title: "دعم احترافي", desc: "تواصل واضح ومتابعة مستمرة أثناء وبعد التطوير." },
        { title: "دقة في التفاصيل", desc: "اهتمام حقيقي بأدق التفاصيل في كل واجهة ووظيفة." },
      ],
    },
    stats: {
      heading: "أسلوب عمل واضح، بلا وعود مبالغ فيها",
      items: [
        { value: "100%", label: "حلول مخصصة بالكامل" },
        { value: "24/7", label: "حضور رقمي دائم" },
        { value: "Modern", label: "تطوير بأحدث التقنيات" },
        { value: "Focused", label: "تركيز كامل على الأداء" },
      ],
    },
    contact: {
      eyebrow: "تواصل معنا",
      heading: "هل لديك فكرة أو مشروع؟",
      subheading: "دعنا نحوله إلى واقع.",
      body: "أخبرنا بتفاصيل مشروعك، وسنتواصل معك لمناقشة الحل الأنسب لاحتياجك.",
      discord: "انضم إلى Discord",
      contact: "تواصل معنا",
      request: "اطلب خدمة",
    },
    requestModal: {
      title: "اختر طريقة التواصل لطلب الخدمة",
      discord: "طلب الخدمة عبر Discord",
      whatsapp: "طلب الخدمة عبر WhatsApp",
      close: "إغلاق",
    },
    footer: {
      tagline: "استوديو تطوير رقمي احترافي",
      linksHeading: "روابط سريعة",
      home: "الرئيسية",
      services: "خدماتنا",
      about: "من نحن",
      contact: "تواصل معنا",
      discord: "Discord",
      rights: "© 2026 Vynox Studio. جميع الحقوق محفوظة.",
    },
    visitors: "زائر",
  },
  en: {
    meta: {
      title: "Vynox Studio — Professional Digital Development Studio",
      description:
        "Vynox Studio is a development studio specializing in FiveM, Discord systems, custom software, and web development — built on quality and performance.",
    },
    nav: {
      home: "Home",
      about: "About Us",
      services: "Services",
      why: "Why Vynox",
      contact: "Contact",
      cta: "Start a Project",
    },
    hero: {
      eyebrow: "Digital Development Studio",
      heading: "We build the solutions, and turn ideas into reality",
      body: "Vynox Studio is a development studio specializing in FiveM systems, Discord solutions, and custom software — focused on quality, performance, and innovation to deliver complete digital experiences.",
      ctaPrimary: "Explore Our Services",
      ctaSecondary: "Get in Touch",
      tagFiveM: "FiveM",
      tagDiscord: "Discord",
      tagWeb: "Web",
      tagAutomation: "Automation",
    },
    about: {
      eyebrow: "About Us",
      heading: "A studio built on precision and technical commitment",
      body1: "Vynox Studio is a digital development studio delivering custom solutions built around each client's needs — from advanced FiveM systems, to intelligent Discord bots and systems, to websites, custom software, and automation.",
      body2: "We treat every project as a complete system: clear planning, clean and maintainable code, and thorough testing before delivery. Our goal is a long-term working relationship built on trust and real quality — not overstated promises.",
      points: [
        { title: "Clean Engineering", desc: "Organized, scalable code on every project." },
        { title: "Direct Communication", desc: "Clear updates with you at every stage of development." },
        { title: "Responsible Delivery", desc: "Thorough testing before any system ships." },
      ],
    },
    services: {
      eyebrow: "Our Services",
      heading: "Complete technical solutions, under one roof",
      subheading: "From first idea to a working system — we cover the full development cycle.",
      items: [
        {
          title: "FiveM Development",
          desc: "Custom systems, scripts, and interfaces for FiveM servers, built for long-term performance and stability.",
        },
        {
          title: "Discord Development",
          desc: "Professional Discord bots, automation systems, management tools, and custom integrations for your community.",
        },
        {
          title: "Web Development",
          desc: "Modern, high-performance websites and web applications, fully responsive across all devices.",
        },
        {
          title: "Custom Programming",
          desc: "Custom software solutions built entirely around your specific requirements.",
        },
        {
          title: "Automation",
          desc: "Automation systems that simplify repetitive tasks and improve your team's or community's workflow.",
        },
        {
          title: "Digital Solutions",
          desc: "Technical solutions designed specifically around your business or community's needs, from concept to execution.",
        },
      ],
    },
    why: {
      eyebrow: "Why Vynox Studio",
      heading: "Standards we hold on every project",
      items: [
        { title: "High Quality", desc: "Rigorous standards in code and design on every delivery." },
        { title: "Custom Solutions", desc: "Every project is built specifically around your needs, not a template." },
        { title: "Modern Technology", desc: "Current tools and frameworks for better performance and stability." },
        { title: "Performance Focused", desc: "Fast, stable systems built to handle real-world use." },
        { title: "Professional Support", desc: "Clear communication and ongoing follow-up during and after development." },
        { title: "Attention to Detail", desc: "Genuine care for the smallest details in every interface and function." },
      ],
    },
    stats: {
      heading: "A clear way of working, without overstated claims",
      items: [
        { value: "100%", label: "Fully Custom Solutions" },
        { value: "24/7", label: "Digital Presence" },
        { value: "Modern", label: "Development Stack" },
        { value: "Focused", label: "On Performance" },
      ],
    },
    contact: {
      eyebrow: "Get in Touch",
      heading: "Have an idea or a project?",
      subheading: "Let's turn it into reality.",
      body: "Tell us about your project, and we'll get back to you to discuss the best solution for your needs.",
      discord: "Join our Discord",
      contact: "Contact Us",
      request: "Request a Service",
    },
    requestModal: {
      title: "Choose how you would like to request your service",
      discord: "Request via Discord",
      whatsapp: "Request via WhatsApp",
      close: "Close",
    },
    footer: {
      tagline: "Professional Digital Development Studio",
      linksHeading: "Quick Links",
      home: "Home",
      services: "Services",
      about: "About",
      contact: "Contact",
      discord: "Discord",
      rights: "© 2026 Vynox Studio. All Rights Reserved.",
    },
    visitors: "visitors",
  },
};
