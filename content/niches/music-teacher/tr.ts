import { musicTeacherResearch } from "./research"
import type { NichePageContent } from "@/content/niches/types"

export const content: NichePageContent = {
  meta: {
    title: "Perelai müzik öğretmenleri için",
    description:
      "Ders cirosu, kayıtlı maliyetler ve hesaplanan kârı herhangi bir dönem için takip edin — öğrenci geçmişi ve paket kullanımları okunabilir kalsın.",
    ogImageAlt:
      "Bir müzik öğretmeni için Perelai finans özeti: ders cirosu, kayıtlı maliyetler ve dönem için hesaplanan kâr — örnek veriler.",
  },

  hero: {
    eyebrow: "Müzik öğretmenleri için finans yazılımı",
    h1: "Özel öğretiminizin finanslarına net bir bakış.",
    subhead:
      "Gün, hafta, ay, çeyrek veya yıl için ders cirosu, kayıtlı maliyetler ve hesaplanan kârı takip edin. Tamamlanan dersler, kayıtlı ödemeler ve paket kullanımları ayrı kalırken sonucu öğrenci ve ders kategorisine göre inceleyin.",
    mock: "lash-workspace",
  },

  pains: [
    {
      title: "Öğretim saatleri stüdyo giderlerini gizler",
      body: "Piyano, gitar ve notadan okuma dersleriyle dolu bir program öğretim aktivitesini gösterir, dönemin finansal sonucunu değil. Piyano akortu, tel değişimi ve nota baskısı ders saatlerinin yanında durur — ve stüdyo takviminde yer almaz.",
    },
    {
      title: "Dönem ön ödemesi haftalık görünümü zorlaştırır",
      body: "Kayıtta tam dönem ücretini almak, sonraki öğretim haftalarının yeni nakit hareketleri üretip üretmediğini maskeler. Her katılınan ders için nakit dışı kredi kullanımlarını kaydetmek tamamlanan enstrümantal öğretimi şeffaf tutar.",
    },
    {
      title: "Dersler, ödemeler ve giderler farklı yerlerde yaşar",
      body: "Özel dersler takvimde rezerve edilir, öğrenci ücretleri havaleyle gelir, nota ve akort fişleri çekmecelerde kalır. Stüdyo finanslarını değerlendirmek bu parçaları bir araya getirmek demektir.",
    },
  ],

  dayInLife: {
    title: "Her dersi kaydedin. Dönemi ihtiyaç duyduğunuzda inceleyin.",
    body: "Dersleri tamamlayın, ödemeleri kaydedin, paket kredilerini kullanın ve normal yönetim sırasında öğretim giderleri ekleyin. Perelai bu kayıtları öğrenci, ders kategorisi ve seçilen döneme bağlı tutar.",
    steps: [
      {
        title: "Ders tamamlama ve ödeme durumu farklı şeylerdir",
        body: "Bir Piyano Dersini tamamlandı olarak işaretlemek öğretimin gerçekleştiğini kaydeder. Tahsilat ziyaretin bir parçası olarak ayrı kaydedilir.",
      },
      {
        title: "Ödemeler ders ve öğrenciyle bağlı kalır",
        body: "Bir ödeme kaydedildiğinde, belirli öğrenci ve derse bağlanır — finans geçmişi verilen öğretime bağlı kalır.",
      },
      {
        title: "Dönem blok kredileri planlanan ziyaretlere uygulanır",
        body: "Dönem ders bloğundan bir kredi düşmek ziyareti para hareketi olmadan kapatır. Verilen öğretim ve ödeme kayıtları ayrı kalır.",
      },
      {
        title: "Stüdyo finansal sonucunu görün",
        body: "Gün, hafta, ay, çeyrek veya yıl için ders cirosu, kayıtlı maliyetler ve hesaplanan kârı öğrenci veya ders kategorisine göre gösterin.",
      },
    ],
  },

  terminology: [
    {
      theirWord: "Piyano Dersi, Gitar Dersi",
      perelaiWord: "Bir Ziyaretteki Hizmetler",
      why: "Müzik öğretmeni şablonu repertuar, kulak eğitimi ve gam çalışması için iki başlangıç ders türü içerir. Her planlanan ders öğrenci, ders türü ve ödeme kaydını birlikte taşıyan bir Ziyaret olur.",
    },
    {
      theirWord: "Notalar",
      perelaiWord: "Bir Ziyaretteki Ek Hizmet",
      why: "Nota kitapları veya basılı partisyonlar öğrenci ziyaret kaydına eklenen ek hizmetler olarak kaydedilir.",
    },
    {
      theirWord: "Cihaz Bakımı",
      perelaiWord: "Kayıtlı Gider",
      why: "Akort, tel değişimi ve diğer öğretim giderlerini dönem maliyeti olarak kaydedin. Seçilen dönemin hesaplanan kârına katkıda bulunurlar.",
    },
    {
      theirWord: "Dönem ders bloğu",
      perelaiWord: "Ön ödemeli paket",
      why: "Ön ödemeli ders paketleri kredi bakiyesi olarak durur, dönem cirosunu bozmadan ders ders kullanılır.",
    },
  ],

  setup: {
    title: "Boş bir sayfadan değil, bir müzik stüdyosunun ders listesinden başlayın.",
    body: "Müzik öğretmeni şablonu iki düzenlenebilir ders türü, bir ek hizmet ve bir gider kategorisiyle açılır — ilk ekranınız zaten çalışan bir stüdyoya benzer.",
    steps: [
      {
        title: "Ders kataloğunuzu yapılandırın",
        body: "Önceden yüklenmiş müzik öğretmeni şablonundan enstrümantal ders sürelerini ve ücretlerini seçin.",
      },
      {
        title: "Dersleri planlayın ve ilgili kalemleri ekleyin",
        body: "Tekrarlayan dersleri planlayın, ziyaretleri tamamlayın ve ders kaydının parçası olduğunda Notalar ekleyin.",
      },
      {
        title: "Stüdyo performansını döneme göre takip edin",
        body: "Gün, hafta, ay, çeyrek veya yıl için dönem cirosu, kayıtlı maliyetler ve hesaplanan kârı inceleyin.",
      },
    ],
  },

  faq: [
    {
      q: "Ön ödemeli dönem ders paketleri nasıl işlenir?",
      a: "Dönem paketleri kredi olarak durur. Öğrenci geldiğinde bir kredi kullanılır — verilen dersler ve ödeme ayrı kalır.",
    },
    {
      q: "Piyano akortu veya tel değişimi gibi giderleri kaydedebilir miyim?",
      a: "Evet. İlgili öğretim giderlerini kaydedebilirsiniz. Seçilen dönemin maliyetlerine ve hesaplanan kârına dahil edilirler.",
    },
    {
      q: "Bir dersi tamamlamak ödeme de kaydeder mi?",
      a: "Hayır. Tamamlama ve ödeme durumu ayrı kaydedilir. Ödeme kaydedilmeden önce tamamlanmış bir ders var olabilir.",
    },
    {
      q: "Şablondaki ders seçenekleri özelleştirilebilir mi?",
      a: "Evet. Başlangıç hizmetlerini (Piyano Dersi, Gitar Dersi), Notalar ek hizmetini ve Cihaz Bakımı gider kategorisini düzenleyebilir veya genişletebilirsiniz.",
    },
  ],

  labels: {
    terminologyTitle: "Müzik öğretimi terimleri ve Perelai kavramları.",
    inYourChair: "Stüdyonuzda",
    inPerelai: "Perelai'de",
    whyItMatters: "Neden önemli",
    mocksTitle: "Müzik stüdyosu verileri, üründe gösterildiği gibi.",
    mocksBody: "Örnek veriler müzik öğretmeni şablonunun kendi hizmetlerini, ek hizmetini ve giderini kullanır.",
    faqTitle: "Sık sorulan sorular.",
  },

  whatItIsNot: {
    title: "Ne olmadığı konusunda net.",
    body: "Perelai tamamlanan dersleri, öğretim giderlerini ve hesaplanan kârı seçilen bir dönem için kaydeder. Tam bir stüdyo back office'i değildir.",
    items: [
      {
        title: "Muhasebe yazılımı değil",
        body: "Dönem cirosu, kayıtlı giderler ve hesaplanan kârı gösterir. Defter tutma, vergi hazırlığı ve finansal danışmanlık muhasebecinize aittir.",
      },
      {
        title: "Nota veya notasyon yazılımı değil",
        body: "Hizmetleri, ek hizmetleri ve paket kullanımlarını takip edebilirsiniz. Müzik notasyonu, kompozisyon ve ses kaydı bunun parçası değil.",
      },
      {
        title: "Marketplace değil",
        body: "Rezervasyon bağlantınız size aittir. Perelai sizinle öğrencileriniz arasına girmez.",
      },
    ],
  },

  cta: {
    title: "Dönemin ne getirdiğini bilin.",
    body: "Tamamlanan öğretimi, kayıtlı ödemeleri, paket kullanımlarını ve açık sipariş bakiyelerini okunabilir kayıtlar olarak yönetmek için bir stüdyo ders listesiyle başlayın.",
    label: "Çalışma alanı oluştur",
    microcopy: "Kurulumu tamamlamak için doğrulama e-postası alacaksınız.",
  },

  research: musicTeacherResearch,
}
