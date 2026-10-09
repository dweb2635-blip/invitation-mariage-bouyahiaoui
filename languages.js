'use strict';
const translations = [
 ['.skip','Go to the invitation','الانتقال إلى الدعوة'],
 ['.welcome-intro','Welcome to<br>our wedding','أهلاً بكم<br>في حفل زفافنا'],
 ['.welcome-names, .names, .signature','Islem <span>&</span> Manel','إسلام <span>و</span> منال'],
 ['.welcome-foot, .hero-date','24 NOVEMBER 2026','24 نوفمبر 2026'],
 ['.seal-caption','Open our invitation','افتحوا دعوتنا'],
 ['.nav nav a[href="#date"]','The date','الموعد'],
 ['.nav nav a[href="#programme"]','The moments','البرنامج'],
 ['.nav nav a[href="#lieu"]','The venue','المكان'],
 ['.vertical-note','LOVE, FOREVER','الحب، إلى الأبد'],
 ['.invocation','In the name of Allah, the Most Gracious, the Most Merciful','بسم الله الرحمن الرحيم'],
 ['.hero-content>.eyebrow','WELCOME TO OUR WEDDING','أهلاً بكم في حفل زفافنا'],
 ['.romantic','Two hearts, one story,<br>a future to share…','قلبان، وحكاية واحدة،<br>ومستقبل يجمعنا…'],
 ['.discover','DISCOVER THE INVITATION <span aria-hidden="true">↓</span>','اكتشفوا الدعوة <span aria-hidden="true">↓</span>'],
 ['.invitation-frame>.eyebrow','HAPPINESS IS MEANT TO BE SHARED','الفرحة تكتمل بمشاركتكم'],
 ['.invitation-frame h2','And you are part of it.','وأنتم جزء منها.'],
 ['.invitation-message','With great joy, the Bouyahiaoui family invites you to celebrate the wedding of Islem and Manel and share a day filled with love, happiness and beautiful promises.','بكل فرح وسرور، تدعوكم عائلة بويحياوي لحضور حفل زفاف إسلام ومنال ومشاركتها هذا اليوم المليء بالحب والسعادة والوعود الجميلة.'],
 ['.invitation-date-label','Our wedding will take place on','سيكون موعد زفافنا يوم'],
 ['.invitation-date','Tuesday, 24 November 2026','الثلاثاء 24 نوفمبر 2026'],
 ['.invitation-time','The wedding begins at <strong>3 p.m.</strong>','يبدأ حفل الزفاف في الساعة <strong>15:00</strong>'],
 ['.invitation-family','The Bouyahiaoui family','عائلة بويحياوي'],
 ['#date>.eyebrow','THE BEGINNING OF OUR FOREVER','بداية رحلتنا معاً'],
 ['#date>h2','Save the date','احفظوا هذا الموعد'],
 ['.date-display>span:first-child','TUESDAY','الثلاثاء'],
 ['.date-display>span:last-child','NOVEMBER<br>2026','نوفمبر<br>2026'],
 ['.wedding-calendar caption','November <span>2026</span>','نوفمبر <span>2026</span>'],
 ['.wedding-day>.sr-only',' : our wedding day, at 3 p.m.',' : يوم زفافنا، الساعة 15:00'],
 ['.calendar-note','Tuesday, 24 November · At 3 p.m.','الثلاثاء 24 نوفمبر · الساعة 15:00'],
 ['#count-caption','Every moment brings us closer to you.','كل لحظة تقرّبنا من لقائكم.'],
 ['#days+span','Days','أيام'], ['#hours+span','Hours','ساعات'], ['#minutes+span','Minutes','دقائق'], ['#seconds+span','Seconds','ثوانٍ'],
 ['#programme .eyebrow','MOMENTS TO CHERISH','لحظات جميلة نشاركها'],
 ['#programme h2','A day of beautiful moments','يوم مليء باللحظات الجميلة'],
 ['#programme .section-heading>p:last-child','The warmth of reuniting. The joy of being together.','دفء اللقاء وفرحة اجتماعنا معاً.'],
 ['.moment-point:nth-child(1) h3','Coffee','القهوة'],
 ['.moment-point:nth-child(1) p','Coffee to welcome one another, exchange smiles and begin this beautiful celebration.','نلتقي على فنجان قهوة، ونتبادل الابتسامات لنبدأ هذا الاحتفال الجميل.'],
 ['.moment-point:nth-child(2) h3','Tea','الشاي'],
 ['.moment-point:nth-child(2) p','A gentle moment over tea, to enjoy the happiness of being together.','لحظة هادئة حول الشاي، نستمتع فيها بفرحة وجودنا معاً.'],
 ['.moment-point:nth-child(3) h3','Dinner','العشاء'],
 ['.moment-point:nth-child(3) p','We will continue the celebration with a welcoming dinner and the joy of being together.','نواصل الاحتفال حول عشاء يجمعنا في أجواء من الفرح والسعادة.'],
 ['.venue-copy>.eyebrow','OUR WEDDING VENUE','مكان حفل زفافنا'],
 ['#venue-title','<span class="venue-type">Reception hall</span>Étoile d’Or <span class="venue-drali">(Drali)</span>','<span class="venue-type">قاعة الأفراح</span>النجمة الذهبية <span class="venue-drali">(درالي)</span>'],
 ['.venue-address','Boudouaou, Boumerdès, Algeria','بودواو، بومرداس، الجزائر'],
 ['#maps-link','View location <span aria-hidden="true">↗</span><span class="sr-only"> (new tab)</span>','عرض الموقع <span aria-hidden="true">↗</span><span class="sr-only"> (نافذة جديدة)</span>'],
 ['.venue-gallery>.eyebrow','DISCOVER THE VENUE','اكتشفوا المكان'],
 ['#gallery-title','Discover our reception venue','اكتشفوا مكان احتفالنا'],
 ['.closing>.eyebrow','BY OUR SIDE, SIMPLY','معنا في أجمل لحظاتنا'],
 ['.closing h2','Your presence is<br>our greatest gift.','حضوركم هو<br>أجمل هدية لنا.'],
 ['.closing>p:not([class])','The Bouyahiaoui family would be honoured to welcome you to celebrate the wedding of Islem and Manel. Thank you for sharing this special moment and making the day even more beautiful with your presence.','تتشرف عائلة بويحياوي باستقبالكم للاحتفال بزفاف إسلام ومنال. شكراً لمشاركتكم هذه اللحظة المميزة ولإضفاء مزيد من الفرح والجمال على هذا اليوم بحضوركم.'],
 ['.with-love','With all our affection,','مع خالص محبتنا،'],
 ['footer>p','24 · 11 · 2026 <span>—</span> A STORY FOR A LIFETIME','24 · 11 · 2026 <span>—</span> حكاية تدوم مدى الحياة'],
 ['#replay','Replay the invitation','إعادة فتح الدعوة']
];
const records = translations.flatMap(([selector,en,ar]) => [...document.querySelectorAll(selector)].map(element => ({element,fr:element.innerHTML,en,ar})));
records.forEach(record => {
 if (record.element.matches('.welcome-intro')) record.fr='Bienvenue à<br>notre mariage';
 if (record.element.matches('.hero-content>.eyebrow')) record.fr='BIENVENUE À NOTRE MARIAGE';
});
const ui = {
 fr:{play:'Écouter',pause:'Pause',musicPlay:'Écouter la musique',musicPause:'Mettre la musique en pause',galleryPlay:'Reprendre le défilement automatique',galleryPause:'Mettre le défilement automatique en pause',ended:'Le grand jour est arrivé. Place à notre nouvelle histoire !'},
 en:{play:'Play',pause:'Pause',musicPlay:'Play music',musicPause:'Pause music',galleryPlay:'Resume slideshow',galleryPause:'Pause slideshow',ended:'The big day is here. Our new story begins!'},
 ar:{play:'تشغيل',pause:'إيقاف مؤقت',musicPlay:'تشغيل الموسيقى',musicPause:'إيقاف الموسيقى مؤقتاً',galleryPlay:'استئناف عرض الصور',galleryPause:'إيقاف عرض الصور مؤقتاً',ended:'حلّ يومنا الكبير. تبدأ حكايتنا الجديدة!'}
};
window.weddingLanguage='fr';
window.weddingText=key=>ui[window.weddingLanguage][key];
const attributes=[
 ['#welcome, #open-invitation','aria-label','Open our invitation','افتحوا دعوتنا'],
 ['.nav nav','aria-label','Main navigation','التنقل الرئيسي'],
 ['.nav .monogram','aria-label','Manel and Islem, home','منال وإسلام، الصفحة الرئيسية'],
 ['.wedding-calendar table','aria-label','November 2026 calendar, wedding on Tuesday 24','تقويم نوفمبر 2026، الزفاف يوم الثلاثاء 24'],
 ['.countdown','aria-label','Time remaining until the wedding','الوقت المتبقي حتى الزفاف'],
 ['#gallery-track','aria-label','Photos of the Étoile d’Or venue','صور قاعة النجمة الذهبية'],
 ['#gallery-track','aria-roledescription','carousel','عرض صور'],
 ['#gallery-prev','aria-label','Previous photo','الصورة السابقة'],
 ['#gallery-next','aria-label','Next photo','الصورة التالية']
].flatMap(([selector,attribute,en,ar])=>[...document.querySelectorAll(selector)].map(element=>({element,attribute,fr:element.getAttribute(attribute),en,ar})));
const weekdays={fr:['Lundi','Mardi','Mercredi','Jeudi','Vendredi','Samedi','Dimanche'],en:['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'],ar:['الاثنين','الثلاثاء','الأربعاء','الخميس','الجمعة','السبت','الأحد']};
function setWeddingLanguage(language){
 if(!ui[language])return;
 window.weddingLanguage=language;
 document.documentElement.lang=language;
 document.documentElement.dir=language==='ar'?'rtl':'ltr';
 records.forEach(record=>{record.element.innerHTML=record[language]});
 attributes.forEach(record=>record.element.setAttribute(record.attribute,record[language]));
 document.querySelectorAll('.wedding-calendar th abbr').forEach((element,index)=>{element.title=weekdays[language][index];element.textContent=language==='ar'?weekdays.ar[index]:weekdays[language][index].slice(0,3)});
 document.querySelectorAll('.gallery-slide').forEach((element,index)=>{
  element.setAttribute('aria-roledescription',language==='ar'?'صورة':language==='en'?'slide':'diapositive');
  element.setAttribute('aria-label',`${index+1} ${language==='ar'?'من':language==='en'?'of':'sur'} 24`);
  element.querySelector('img').alt=language==='ar'?`قاعة النجمة الذهبية (درالي)، صورة ${index+1}`:language==='en'?`Étoile d’Or (Drali) venue, photo ${index+1}`:`Salle Étoile d’Or (Drali), photo ${index+1}`;
 });
 document.querySelector('.welcome-card').dataset.heading={fr:'CÉLÉBRATION DE NOTRE MARIAGE',en:'THE WEDDING CELEBRATION',ar:'احتفال زفافنا'}[language];
 document.title=language==='ar'?'إسلام ومنال — حفل زفافنا':language==='en'?'Islem & Manel — Our wedding':'Islem & Manel — Notre mariage';
 document.querySelector('meta[name="description"]').content={fr:'La famille Bouyahiaoui vous invite au mariage d’Islem et Manel, le 24 novembre 2026 à 15 h.',en:'The Bouyahiaoui family invites you to the wedding of Islem and Manel on 24 November 2026 at 3 p.m.',ar:'تدعوكم عائلة بويحياوي إلى زفاف إسلام ومنال يوم 24 نوفمبر 2026 الساعة 15:00.'}[language];
 document.querySelectorAll('[data-language]').forEach(button=>button.setAttribute('aria-pressed',String(button.dataset.language===language)));
 try{localStorage.setItem('wedding-language',language)}catch{}
 window.dispatchEvent(new Event('weddinglanguagechange'));
}
document.querySelectorAll('[data-language]').forEach(button=>button.addEventListener('click',()=>setWeddingLanguage(button.dataset.language)));
let savedLanguage='fr';try{savedLanguage=localStorage.getItem('wedding-language')||'fr'}catch{}
setWeddingLanguage(savedLanguage);
