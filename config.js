/* =====================================================================
   ⚙️  إعدادات العميل — هذا هو الملف الوحيد الذي تعدّله عند ربط عيادة/مشروع
   Firebase جديد. ضع نسخة مطابقة منه في مجلدات: doctor / nurse / booking.
   لا حاجة للبحث داخل الكود إطلاقاً.
   ===================================================================== */

/* (1) إعدادات مشروع Firebase
   من: Firebase Console → ⚙️ Project settings → Your apps → Web app → SDK config */
window.FIREBASE_CONFIG = {
  apiKey:            "AIzaSyC-5L7X48zF5AnbiPZQqI6vsPghkqlY6Ic",
  authDomain:        "lite-8bdad.firebaseapp.com",
  projectId:         "lite-8bdad",
  storageBucket:     "lite-8bdad.firebasestorage.app",
  messagingSenderId: "505081056049",
  appId:             "1:505081056049:web:4ddfca1ac71afc19133e10"
};

/* (2) حسابات جوجل للموظفين — نفس هذه الإيميلات يجب أن تُوضع في قواعد Firestore */
window.DOCBOOK_ROLES = {
  doctor: ['ahmadtaim450@gmail.com', 'aistam379@gmail.com'],   // ← بريد/بُرُد الطبيب
  nurse:  ['nawwacode@gmail.com']                               // ← بريد/بُرُد الممرضة
};

/* (دالة مساعدة — لا تعدّلها) */
window.DOCBOOK_ROLE_OF = function (email) {
  email = (email || '').toLowerCase().trim();
  if ((window.DOCBOOK_ROLES.doctor || []).map(function (e) { return e.toLowerCase(); }).indexOf(email) !== -1) return 'doctor';
  if ((window.DOCBOOK_ROLES.nurse  || []).map(function (e) { return e.toLowerCase(); }).indexOf(email) !== -1) return 'nurse';
  return null;
};