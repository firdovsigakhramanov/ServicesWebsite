document.addEventListener("DOMContentLoaded", () => {
  // Tərcümə edəcəyimiz mətnlər
  var translations = {
    "Как правильно ухаживать за холодильником и когда обращаться к мастеру?":
      "Soyuducuya necə düzgün qulluq etmək və nə vaxt ustaya müraciət etmək lazımdır?",
    "Холодильник – это один из самых важных бытовых приборов в вашем доме. Без него невозможно сохранить свежесть продуктов, а его поломка может стать настоящей проблемой. В этой статье мы расскажем, как правильно ухаживать за холодильником, какие неисправности встречаются чаще всего и когда стоит вызывать мастера.":
      "Soyuducu evdə ən vacib ev alətlərindən biridir. Onun köməyi ilə qida məhsullarını təzə saxlamaq mümkündür və onun nasazlığı ciddi problemlərə səbəb ola bilər. Bu məqalədə biz soyuduculara düzgün qulluq etmə qaydalarını, ən çox rast gəlinən nasazlıqları və nə vaxt ustaya müraciət etməyin vacibliyini izah edəcəyik.",
    "Основные правила ухода за холодильником":
      "Soyuducuya düzgün qulluq qaydaları",
    "Чтобы продлить срок службы холодильника и избежать поломок, следуйте этим рекомендациям:":
      "Soyuducunun ömrünü uzatmaq və nasazlıqlardan qaçınmaq üçün bu tövsiyələrə əməl edin:",
    "Регулярная разморозка": "Mütəmadi olaraq don açın",
    "Правильная температура": "Doğru temperatur",
    "Не перегружайте полки": "Rəfləri çox doldurmayın",
    "Чистка вентиляционных отверстий": "Ventilyasiya dəliklərini təmizləyin",
    "Проверка уплотнителей": "Qapı möhürlərini yoxlayın",
    "Самые частые неисправности холодильников":
      "Soyuducularda ən çox rast gələn nasazlıqlar",
    "Если ваш холодильник работает неправильно, не стоит ждать полного выхода из строя. Чем раньше вы обратитесь к специалисту, тем дешевле и быстрее будет ремонт. Вызывайте мастера в следующих случаях:":
      "Əgər soyuducunuz düzgün işləmirsə, tamamilə xarab olmasını gözləməyin. Nə qədər tez mütəxəssisə müraciət etsəniz, təmir bir o qədər ucuz və sürətli olacaq. Aşağıdakı hallarda ustanı çağırın:",
    "Когда стоит вызывать мастера?": "Nə vaxt ustaya müraciət etməliyik?",
    "Где найти опытного мастера по ремонту холодильников?":
      "Təcrübəli soyuducu ustasını haradan tapmaq olar?",
    "Звоните прямо сейчас:": "İndi zəng edin:",
    "Выезд мастера на дом в удобное для вас время!":
      "Ustanın evinizə gəlişi, sizin üçün uyğun vaxtda!",
    "Если ваш холодильник требует ремонта, обратитесь к профессионалам! Наши специалисты быстро выявят проблему и устранят её по доступной цене. Мы работаем по всему городу и гарантируем качество ремонта.":
      "Əgər soyuducunuz təmirə ehtiyac duyursa, peşəkarlara müraciət edin! Bizim mütəxəssislərimiz problemi tez bir zamanda müəyyən edib, əlverişli qiymətə həll edəcəklər. Biz bütün şəhər üzrə xidmət göstəririk və təmirin keyfiyyətinə zəmanət veririk.",
    "2025 Услуги по ремонту холодильников. Все права защищены.":
      "2025 Soyuducu təmiri xidmətləri. Bütün hüquqlar qorunur.",
    "Даже при правильном уходе со временем могут возникнуть неисправности. Вот самые распространённые:":
      "Hətta düzgün baxım zamanı da zamanla nasazlıqlar meydana gələ bilər. Ən yaygın olanları bunlardır:",
    "Холодильник не охлаждает – Возможные причины: неисправность термостата, утечка фреона, проблемы с компрессором.":
      "Soyuducu soyutmur – Mümkün səbəblər: termostat nasazlığı, freon sızması, kompressorlə bağlı problemlər.",
    "Образуется слишком много льда – Возможно, повреждена резинка дверцы или засорены дренажные отверстия.":
      "Çoxlu buz yaranır – Yəqin ki, qapı şnurunda zədələr və ya drenaj dəlikləri tıxanıb.",
    "Посторонние шумы – Громкий гул или треск может указывать на проблемы с вентилятором или компрессором.":
      "Kənar səslər – Güclü gurultu və ya qıfıl səsi ventilyator və ya kompressorlə bağlı problemləri göstərə bilər.",
    "Холодильник не включается – Причина может быть в неисправном реле, перегоревшем предохранителе или проблемах с электросетью.":
      "Soyuducu işə düşmür – Səbəb, nasaz reley, yanan sigorta və ya elektrik problemi ola bilər.",
    "Появились посторонние звуки, гул или щелчки.":
      "Kənar səslər, gurultu və ya çırpıntılar eşidilir.",
    "Из морозильной камеры течёт вода.": "Dondurucudan su axır.",
    "Компрессор работает без остановки или не включается.":
      "Kompressor fasiləsiz işləyir və ya işə düşmür.",
    "Появился неприятный запах, который не исчезает после уборки.":
      "Qıcıq edici qoxu yaranıb, təmizləmə ilə getmir.",
    "– Даже если у вас современная модель с No Frost, периодическая чистка поможет избежать неприятных запахов и накопления льда.":
      "– Hətta əgər sizdə No Frost texnologiyasına sahib müasir model varsa, dövri olaraq təmizləmə pis qoxulardan və buz yığılmasından qaçmağa kömək edəcək.",

    "– Оптимальная температура в холодильной камере +3…+5°C, а в морозильной –18°C.":
      "– Soyuducu kamerasında optimal temperatur +3…+5°C, dondurucuda isə –18°C olmalıdır.",

    "– Избегайте перегрузки, так как это мешает циркуляции воздуха.":
      "– Yükləməni çox etməyin, çünki bu hava dövranını maneə törədir.",

    "– Раз в несколько месяцев очищайте решётки вентиляции от пыли.":
      "– Bir neçə ayda bir ventilyasiya şəbəkələrinin tozunu təmizləyin.",

    "– Со временем резиновые уплотнители могут терять эластичность, из-за чего холод уходит, а компрессор работает с повышенной нагрузкой.":
      "– Zamanla rezin möhürlər elastikliyini itirə bilər, bunun nəticəsində soyuqluq itir və kompressor daha çox yüklə işləyir.",
    "Холодильник не охлаждает или морозит слишком сильно.":
      "Soyuducu soyutmur və ya həddindən artıq soyuyur.",
  };

  let allElements = document.querySelectorAll(".translate");

  allElements.forEach((element) => {
    console.log(translations[element.textContent.replace(/\s+/g, " ").trim()]);
    if (translations[element.textContent.replace(/\s+/g, " ").trim()]) {
      element.innerHTML =
        translations[element.textContent.replace(/\s+/g, " ").trim()];
    } else {
      element.innerHTML = "";
    }
  });
});
