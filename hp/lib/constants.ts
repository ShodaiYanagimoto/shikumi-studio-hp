export const COMPANY = {
  name: "株式会社しくみスタジオ",
  nameEn: "Shikumi Studio Inc.",
  description:
    "AIとDXの力で、中小企業の「しくみ」をデザインする。コンサルティング・コミュニティ・セミナーを通じて、ビジネスの変革を支援します。",
  representative: {
    name: "桺本 頌大",
    nameReading: "やなぎもと しょうだい",
    title: "代表",
    bio: "老舗企業の経営をしながらLarkやCanvaで働き、Notion Ambassadorも務めるスラッシュワーカー。京都大学MBA。最新テクノロジーやITツールが大好きで、その知見を活かしてAI・DXの普及に取り組んでいる。",
    careers: [
      "㈱アナテック・ヤナコ 7代目アトツギ・取締役",
      "Lark 勤務",
      "Canva 勤務",
      "Notion Ambassador",
      "京都大学MBA",
    ],
  },
  social: {
    x: "https://x.com/shodaiiiiii",
    note: "https://note.com/shodaiiiiii",
    facebook: "https://www.facebook.com/shodai.yanagimoto",
    notion: "https://shodai.notion.site/",
  },
} as const;

export const SERVICES = [
  {
    id: "consulting",
    title: "AI・DXコンサルティング",
    description:
      "中小企業に特化したAI導入・DX推進のコンサルティング。現場の課題を理解し、実行可能な変革プランを一緒に設計します。",
    image:
      "https://images.unsplash.com/photo-1717501217835-821cc3aefbc3?w=800&q=80",
    benefit: "AI・DX導入後の定着率が上がり、現場が自走できるようになります",
  },
  {
    id: "community",
    title: "AIコミュニティ運営",
    description:
      "AI活用に関心のあるビジネスパーソンが集まるコミュニティ。最新情報の共有や実践的なナレッジ交換の場を提供します。",
    image:
      "https://images.unsplash.com/photo-1717501217780-03809da32358?w=800&q=80",
    benefit: "AIの最新情報を継続的にキャッチアップでき、社内展開のヒントが得られます",
  },
  {
    id: "seminar",
    title: "セミナー・研修事業",
    description:
      "AIインフルエンサーとしての知見を活かした実践的なセミナー。基礎から応用まで、すぐに使える知識をお届けします。",
    image:
      "https://images.unsplash.com/photo-1717501217710-775828219832?w=800&q=80",
    benefit: "その日から使えるAIスキルが身につき、業務効率化の第一歩を踏み出せます",
  },
] as const;

export const NAV_ITEMS = [
  { label: "代表者について", href: "/#about" },
  { label: "事業内容", href: "/#services" },
  { label: "よくある質問", href: "/#faq" },
  { label: "お問い合わせ", href: "/#contact" },
] as const;

export const FOUNDER = {
  name: "桺本 頌大",
  nameReading: "やなぎもと しょうだい",
  title: "代表取締役",
  greeting: "テクノロジーの力で、御社の仕組みを変えさせてください。",
  image: "/images/profile.jpg",
  story: [
    "LarkやCanvaといった、テクノロジーの最前線を走り続ける企業での実務経験があります。Larkについては、ByteDance（バイトダンス）との契約を通じて副業として従事し、Canvaにおいても同様に副業でプロダクトに深く関わってきました。また、Notion Ambassadorとしても活動しており、先端ツールの活用知見を日々発信しています。",
    "一方で、創業134年の老舗企業・㈱アナテック・ヤナコの7代目後継者として、中小企業の経営にも携わっています。テクノロジーの最前線と、中小企業の現場——この二つを行き来するなかで気づいたのは、情報や技術の格差ではなく、「橋渡しをする人」がいないだけだということでした。",
    "最先端を走り続けた現場の経験と、経営者としての視点。この両方を持つからこそ、中小企業の「仕組みづくり」に寄り添えると信じています。テクノロジーと現場を繋ぎ、みなさんの力が最大限に発揮される仕組みを一緒にデザインしたい——それが、しくみスタジオを立ち上げた理由です。",
  ],
  social: {
    x: "https://x.com/shodaiiiiii",
  },
} as const;

export const SERVICE_FLOW = [
  {
    step: 1,
    title: "お問い合わせ",
    description:
      "まずはお気軽にお問い合わせフォームまたはSNSのDMからご連絡ください。「AIって何から始めればいいの？」「業務をもっと効率化したい」など、漠然としたお悩みでも大丈夫です。担当者より2営業日以内にご返信いたします。",
  },
  {
    step: 2,
    title: "ヒアリング・現状分析",
    description:
      "オンライン（Zoom / Google Meet）または対面にて、60〜90分のヒアリングを実施します。現在の業務フロー、使用中のツール、チーム体制、抱えている課題を詳しくお伺いし、AI・DX導入の可能性を一緒に整理します。",
  },
  {
    step: 3,
    title: "ご提案・プランニング",
    description:
      "ヒアリング内容をもとに、御社に最適なソリューションと具体的な実行プランをまとめた提案書をご提出します。導入するツール、スケジュール、費用感、期待される効果を明確にお示しします。",
  },
  {
    step: 4,
    title: "実行・伴走支援",
    description:
      "プランに基づき、ツールの導入設定から社内展開、運用定着まで伴走型でサポートします。週次または月次の定期ミーティングで進捗を確認し、必要に応じてプランを柔軟に調整しながら進めます。",
  },
] as const;

export const COMPANY_INFO = [
  { label: "会社名", value: "株式会社しくみスタジオ" },
  { label: "代表者", value: "桺本 頌大（やなぎもと しょうだい）" },
  { label: "所在地", value: "〒600-8xxx 京都府京都市下京区xxx町xxx番地" },
  { label: "電話番号", value: "075-xxx-xxxx" },
  { label: "事業内容", value: "AI・DXコンサルティング / AIコミュニティ運営 / セミナー・研修事業" },
] as const;

export const FAQ_ITEMS = [
  {
    question: "AI導入の経験がなくても大丈夫ですか？",
    answer:
      "はい、まったく問題ありません。AIの基礎知識から丁寧にご説明し、御社の状況に合わせた段階的な導入をサポートします。",
  },
  {
    question: "コンサルティングの期間はどのくらいですか？",
    answer:
      "課題の規模により異なりますが、まずは3ヶ月の短期プランから始められます。必要に応じて継続的な支援も可能です。",
  },
  {
    question: "どのような業種に対応していますか？",
    answer:
      "製造業、小売業、サービス業など、幅広い業種に対応しています。中小企業ならではの課題を深く理解した上で最適な提案を行います。",
  },
  {
    question: "リモートでのコンサルティングは可能ですか？",
    answer:
      "はい、オンラインでの対応も可能です。全国どこからでもご利用いただけます。対面との組み合わせも柔軟に対応します。",
  },
  {
    question: "コミュニティにはどうやって参加できますか？",
    answer:
      "お問い合わせフォームからご連絡いただくか、各種SNSからDMをお送りください。参加方法の詳細をご案内します。",
  },
] as const;

export type ServiceDetail = {
  id: string;
  title: string;
  description: string;
  image: string;
  heroDescription: string;
  challenges: {
    title: string;
    items: string[];
  };
  menu: {
    title: string;
    items: { name: string; description: string }[];
  };
  features: {
    title: string;
    items: { title: string; description: string }[];
  };
};

export const SERVICE_DETAILS: Record<string, ServiceDetail> = {
  consulting: {
    id: "consulting",
    title: "AI・DXコンサルティング",
    description:
      "中小企業に特化したAI導入・DX推進のコンサルティング。現場の課題を理解し、実行可能な変革プランを一緒に設計します。",
    image:
      "https://images.unsplash.com/photo-1717501217835-821cc3aefbc3?w=1600&q=80",
    heroDescription:
      "現場の課題を深く理解し、AIとDXを活用した実行可能な変革プランを一緒に設計。導入から定着まで伴走支援します。",
    challenges: {
      title: "解決できる課題",
      items: [
        "AIを導入したいが、何から始めればいいかわからない",
        "DX推進の方針はあるが、現場に浸透しない",
        "ツールを導入したが活用しきれていない",
        "業務効率化の具体的な方法が見えない",
      ],
    },
    menu: {
      title: "提供メニュー",
      items: [
        {
          name: "AI活用診断",
          description:
            "現状の業務フローを分析し、AI導入の最適ポイントを特定します",
        },
        {
          name: "DX推進ロードマップ策定",
          description:
            "段階的な変革計画を策定し、優先順位を明確にします",
        },
        {
          name: "ツール選定・導入支援",
          description:
            "自社に最適なツールの選定から導入・定着までサポートします",
        },
        {
          name: "定着化・運用支援",
          description: "導入後の運用定着を伴走型で支援します",
        },
      ],
    },
    features: {
      title: "サービスの特徴",
      items: [
        {
          title: "中小企業に特化",
          description:
            "大企業向けの手法ではなく、中小企業の現場に合ったアプローチを提供します",
        },
        {
          title: "実践重視",
          description:
            "理論だけでなく、すぐに実行できる具体的なプランを提案します",
        },
        {
          title: "伴走型支援",
          description:
            "コンサルティングで終わりではなく、定着するまで一緒に走ります",
        },
      ],
    },
  },
  community: {
    id: "community",
    title: "AIコミュニティ運営",
    description:
      "AI活用に関心のあるビジネスパーソンが集まるコミュニティ。最新情報の共有や実践的なナレッジ交換の場を提供します。",
    image:
      "https://images.unsplash.com/photo-1717501217780-03809da32358?w=1600&q=80",
    heroDescription:
      "AI活用に関心のあるビジネスパーソンが集い、最新情報の共有や実践的なナレッジ交換ができるコミュニティを運営しています。",
    challenges: {
      title: "解決できる課題",
      items: [
        "AI活用の最新情報をキャッチアップできていない",
        "社内にAIについて相談できる相手がいない",
        "他社のAI活用事例を知りたい",
        "AIに興味はあるが、一人では学びが続かない",
      ],
    },
    menu: {
      title: "提供メニュー",
      items: [
        {
          name: "月例オンライン勉強会",
          description:
            "最新のAIトレンドやツールの活用法を学ぶ定期的な勉強会",
        },
        {
          name: "ナレッジ共有チャンネル",
          description:
            "メンバー同士が日常的に情報交換できるオンラインコミュニティ",
        },
        {
          name: "ゲストスピーカーセッション",
          description:
            "各分野のエキスパートを招いた特別講演やパネルディスカッション",
        },
        {
          name: "ネットワーキングイベント",
          description:
            "オンライン・オフラインでメンバー同士がつながる交流の場",
        },
      ],
    },
    features: {
      title: "サービスの特徴",
      items: [
        {
          title: "実践者が集まるコミュニティ",
          description:
            "理論だけでなく、実際にAIをビジネスに活用している実践者が多数参加しています",
        },
        {
          title: "業種を超えた交流",
          description:
            "様々な業種のメンバーが集まることで、新たな視点やアイデアが生まれます",
        },
        {
          title: "継続的な学びの場",
          description:
            "一回きりではなく、継続的にAIの知識をアップデートし続けられる環境です",
        },
      ],
    },
  },
  seminar: {
    id: "seminar",
    title: "セミナー・研修事業",
    description:
      "AIインフルエンサーとしての知見を活かした実践的なセミナー。基礎から応用まで、すぐに使える知識をお届けします。",
    image:
      "https://images.unsplash.com/photo-1717501217710-775828219832?w=1600&q=80",
    heroDescription:
      "AIインフルエンサーとしての経験と知見を活かし、基礎から応用まですぐに使える実践的な知識をセミナー形式でお届けします。",
    challenges: {
      title: "解決できる課題",
      items: [
        "社員のAIリテラシーを底上げしたい",
        "AI研修を実施したいが、社内に講師がいない",
        "一般的なセミナーではなく、自社に合った内容で学びたい",
        "最新のAIツールの使い方を実践的に学びたい",
      ],
    },
    menu: {
      title: "提供メニュー",
      items: [
        {
          name: "AI基礎セミナー",
          description:
            "AIの基本概念から最新トレンドまで、初心者向けにわかりやすく解説",
        },
        {
          name: "ツール活用ワークショップ",
          description:
            "ChatGPTなどの生成AIツールを実際に手を動かして学ぶ実践型研修",
        },
        {
          name: "カスタム企業研修",
          description:
            "企業の課題や業種に合わせたオーダーメイドの研修プログラム",
        },
        {
          name: "経営者向け特別講演",
          description:
            "AI時代の経営戦略について考えるエグゼクティブ向けの特別セッション",
        },
      ],
    },
    features: {
      title: "サービスの特徴",
      items: [
        {
          title: "すぐに使える実践的な内容",
          description:
            "座学だけでなく、その日から使えるスキルが身につくプログラム設計",
        },
        {
          title: "豊富な登壇実績",
          description:
            "AIインフルエンサーとして数多くの登壇経験があり、わかりやすい講義が好評です",
        },
        {
          title: "柔軟な形式対応",
          description:
            "オンライン・対面・ハイブリッドなど、ご要望に合わせた形式で実施可能です",
        },
      ],
    },
  },
};
