// Starter question bank. The API selects a deterministic daily set; optional OpenAI generation can extend it.
const bank = [
 {q:"Which planet is known as the Red Planet?",o:["Venus","Mars","Jupiter","Mercury"],a:1,ur:{q:"کون سا سیارہ سرخ سیارہ کہلاتا ہے؟",o:["زہرہ","مریخ","مشتری","عطارد"]}},
 {q:"What is the capital city of Japan?",o:["Seoul","Beijing","Tokyo","Bangkok"],a:2,ur:{q:"جاپان کا دارالحکومت کون سا ہے؟",o:["سیول","بیجنگ","ٹوکیو","بینکاک"]}},
 {q:"How many sides does a hexagon have?",o:["Five","Six","Seven","Eight"],a:1,ur:{q:"مسدس کی کتنی اطراف ہوتی ہیں؟",o:["پانچ","چھ","سات","آٹھ"]}},
 {q:"Which gas do plants absorb from the atmosphere?",o:["Oxygen","Nitrogen","Carbon dioxide","Hydrogen"],a:2,ur:{q:"پودے فضا سے کون سی گیس جذب کرتے ہیں؟",o:["آکسیجن","نائٹروجن","کاربن ڈائی آکسائیڈ","ہائیڈروجن"]}},
 {q:"Which is the largest ocean on Earth?",o:["Atlantic","Indian","Arctic","Pacific"],a:3,ur:{q:"زمین کا سب سے بڑا سمندر کون سا ہے؟",o:["بحر اوقیانوس","بحر ہند","بحر منجمد شمالی","بحرالکاہل"]}},
 {q:"What is 12 × 8?",o:["84","92","96","108"],a:2,ur:{q:"12 ضرب 8 کتنے ہوتے ہیں؟",o:["84","92","96","108"]}},
 {q:"Who wrote the play Romeo and Juliet?",o:["Charles Dickens","William Shakespeare","Jane Austen","Mark Twain"],a:1,ur:{q:"رومیو اینڈ جولیٹ کس نے لکھا؟",o:["چارلس ڈکنز","ولیم شیکسپیئر","جین آسٹن","مارک ٹوین"]}},
 {q:"Which part of the human body pumps blood?",o:["Lungs","Brain","Liver","Heart"],a:3,ur:{q:"انسانی جسم میں خون کون پمپ کرتا ہے؟",o:["پھیپھڑے","دماغ","جگر","دل"]}},
 {q:"What is the chemical symbol for gold?",o:["Ag","Gd","Au","Go"],a:2,ur:{q:"سونے کی کیمیائی علامت کیا ہے؟",o:["Ag","Gd","Au","Go"]}},
 {q:"How many minutes are in two hours?",o:["100","110","120","140"],a:2,ur:{q:"دو گھنٹوں میں کتنے منٹ ہوتے ہیں؟",o:["100","110","120","140"]}},
 {q:"Which country is famous for the ancient pyramids of Giza?",o:["Mexico","Egypt","Greece","India"],a:1,ur:{q:"جیزہ کے قدیم اہرام کس ملک میں ہیں؟",o:["میکسیکو","مصر","یونان","بھارت"]}},
 {q:"What is the closest star to Earth?",o:["Sirius","Polaris","The Sun","Vega"],a:2,ur:{q:"زمین کے سب سے قریب ستارہ کون سا ہے؟",o:["شعریٰ","قطبی ستارہ","سورج","ویگا"]}},
 {q:"Which instrument measures temperature?",o:["Barometer","Thermometer","Compass","Altimeter"],a:1,ur:{q:"درجہ حرارت ناپنے کا آلہ کون سا ہے؟",o:["بیرومیٹر","تھرمامیٹر","قطب نما","الٹی میٹر"]}},
 {q:"What is the square root of 81?",o:["7","8","9","10"],a:2,ur:{q:"81 کا جذر کیا ہے؟",o:["7","8","9","10"]}},
 {q:"Which is the fastest land animal?",o:["Lion","Cheetah","Horse","Leopard"],a:1,ur:{q:"زمین پر سب سے تیز دوڑنے والا جانور کون سا ہے؟",o:["شیر","چیتا","گھوڑا","تیندوا"]}},
 {q:"Which language is primarily spoken in Brazil?",o:["Spanish","Portuguese","French","Italian"],a:1,ur:{q:"برازیل میں بنیادی طور پر کون سی زبان بولی جاتی ہے؟",o:["ہسپانوی","پرتگالی","فرانسیسی","اطالوی"]}},
 {q:"What is the freezing point of water at standard pressure?",o:["0°C","10°C","32°C","100°C"],a:0,ur:{q:"معیاری دباؤ پر پانی کا نقطۂ انجماد کیا ہے؟",o:["0°C","10°C","32°C","100°C"]}},
 {q:"Which device is used to store electrical energy chemically?",o:["Battery","Bulb","Switch","Motor"],a:0,ur:{q:"کیمیائی طریقے سے برقی توانائی ذخیرہ کرنے والا آلہ کون سا ہے؟",o:["بیٹری","بلب","سوئچ","موٹر"]}},
 {q:"Which continent is the Sahara Desert located in?",o:["Asia","Africa","Australia","South America"],a:1,ur:{q:"صحراۓ صحارا کس براعظم میں ہے؟",o:["ایشیا","افریقہ","آسٹریلیا","جنوبی امریکہ"]}},
 {q:"What does CPU stand for in computing?",o:["Central Processing Unit","Computer Power Utility","Core Program Upload","Central Print Unit"],a:0,ur:{q:"کمپیوٹنگ میں CPU کا مطلب کیا ہے؟",o:["Central Processing Unit","Computer Power Utility","Core Program Upload","Central Print Unit"]}}
];
module.exports = bank;
