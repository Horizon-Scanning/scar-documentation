# SCAR - מערכת זיהוי אנומליות בשרשראות אספקה

ברוכים הבאים למערכת **SCAR (Supply Chain Anomaly Recognition)** - מערכת מקיפה מבוססת דאטה המיועדת לזיהוי, ניתוח והתראה על שיבושים ותמורות בשרשראות אספקה גלובליות של סחורות חיוניות לישראל.

## סקירה כללית

מערכת SCAR הינה פרויקט פיתוח משותף בין **רשות חירום לאומית** ו**משרד החדשנות, המדע והטכנולוגיה** (אגף קו האופק). המערכת מנצלת נתוני ביג דאטה (נתוני סחר, מחירי שוק, מדדי הובלה, חדשות, דוחות אנליסטים) וכלי AI (לעיבוד נתונים והפקת תובנות) כדי לספק תמיכה בקבלת החלטות עבור משרדי הממשלה הרלוונטיים.

## יכולות מרכזיות

### 🎯 ניטור רב-ממדי
מעקב אחר סחורות לפי מחיר, הובלה, היצע/ביקוש, ייצוא/ייבוא, ואירועים חדשותיים.

### 🔍 זיהוי אנומליות
הצפת חריגות וסיכונים באמצעות מדדי KPI ייעודיים והשוואות היסטוריות.

### 📊 ניתוח והקשר
הבנת מגמות, זיהוי גורמים משפיעים והערכת השלכות אפשריות.

### 📈 תחזיות
הנגשת תחזיות מומחים לסיכונים והזדמנויות לטווח הקצר והבינוני.

### 🔔 התראות
שליחת התראות יזומות על שינויים משמעותיים או חציית ספים.

### 🤖 אנליזה חכמה
יכולת חקירה וניתוח של תמונת מצב ותמורות צפויות באמצעות צ'אטבוט AI.

### 📱 ממשק ויזואלי
דשבורד אינטראקטיבי, גרפים ומפות להצגה ברורה של המידע.

## ארכיטקטורת המערכת

הפרויקט נבנה על תשתית ענן **נימבוס** עם הרכיבים הבאים:

1. **איסוף אוטומטי של נתונים** - קריאה ואיסוף ממקורות המידע על פי תזמון אוטומטי
2. **עיבוד AI** - עיבוד, סיווג וסיכום המידע באמצעות מודלי AI
3. **אחסון נתונים** - אחסון המידע המעובד במאגר נתונים המאפשר תחקור
4. **ניטור ובקרה** - מערכת ניטור ובקרה על תשתית הנתונים
5. **דשבורד בזמן אמת** - הצגת הנתונים בזמן אמת, ייצוא דוחות והגדרת התראות

## מסכי דשבורד

המערכת מספקת שבעה מסכי דשבורד עיקריים:

- **[מדדי KPI](dashboards/kpis.he.md)** - מדדים מרכזיים לזיהוי אנומליות
- **[ניתוח חדשות](dashboards/news.he.md)** - התפתחויות אחרונות המשפיעות על שוקי הסחורות
- **[מחירי סחורות](dashboards/commodity_prices.he.md)** - מחירי חוזים עתידיים ותחזיות
- **[מחירי הובלה](dashboards/transport_prices.he.md)** - מדדי הובלה ועלויות תחבורה
- **[היצע וביקוש](dashboards/supply_demand.he.md)** - ניתוח ייצור וצריכה עולמיים
- **[ייצוא עולמי](dashboards/worldwide_exports.he.md)** - פעילויות ייצוא סחורות עולמיות
- **[יבוא לישראל](dashboards/israel_imports.he.md)** - יבוא סחורות לישראל

## יתרונות המערכת

### מודעות מצבית משופרת
תמונה עדכנית ומבוססת נתונים על סיכונים בשרשראות אספקה גלובליות.

### זיהוי מוקדם = היערכות מוקדמת
יכולת לזהות בעיות פוטנציאליות לפני שהן הופכות למשבר ולאפשר פעולות מנע.

### תמיכה בקבלת החלטות
כלי עזר להערכת רמות מלאי נדרשות, גיוון מקורות, וניהול סיכונים פרואקטיבי.

### בסיס לדיון ותכנון
מספק שפה משותפת ונתונים אובייקטיביים לדיונים ותכנון.

## תחילת עבודה

1. עיינו ב[סקירת המערכת](overview/system_overview.he.md) להבנת ארכיטקטורת SCAR
2. סקרו את [מסכי הדשבורד](dashboards/kpis.he.md) להבנת הנתונים הזמינים
3. למדו כיצד להשתמש ב[צ'אטבוט AI](chatbot/rag_user_guide.he.md) לניתוח מתקדם
4. עיינו ב[מונחון](glossary/glossary.he.md) למונחים טכניים והגדרות

## מקורות מידע

המערכת משלבת נתונים ממספר מקורות מהימנים:

- **Trading Economics** - מחירי שוק, תחזיות וניתוחי מומחים
- **US Department of Agriculture** - נתוני היצע וביקוש
- **JODI (Joint Organisations Data Initiative)** - נתוני סחורות אנרגיה
- **UN Comtrade** - סטטיסטיקות סחר עולמיות
- **Israel Customs DataGov** - נתוני יבוא ישראליים
- **Reuters** - נתוני שוק פיננסי וחדשות

---

*לתמיכה טכנית או שאלות, אנא פנו למנהל המערכת שלכם.*

