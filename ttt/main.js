   // استهداف جميع الأزرار التي تحتوي على الفئة "buy-X"
   const buyButtons = document.querySelectorAll('.content button');

   // إضافة معالج الحدث لكل زر
   buyButtons.forEach((button, index) => {
       button.addEventListener('click', () => {
           // تحديد عنوان الصفحة المطلوب فتحها
           let pageURL;
           switch (index) {
               case 0:
                   pageURL = 'MOBILES.html';
                   break;
               case 1:
                   pageURL = 'SMARTWATCH.html';
                   break;
               case 2:
                   pageURL = 'AIRPODS.html';
                   break;
               case 3:
                   pageURL = 'laptop.html';
                   break;
               case 4:
                   pageURL = 'pc.html';
                   break;
               default:
                   // لا شيء يحدث إذا لم يتم العثور على الزر
                   break;
           }
           
           // فتح صفحة التفاصيل في نافذة جديدة
           window.open(pageURL, '_blank');
       });
   });
 

