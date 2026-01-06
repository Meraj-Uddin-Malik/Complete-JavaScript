# ⏰ JavaScript Digital Clock (Line-by-Line Explained)

This project shows how to create a **live digital clock** using **HTML + JavaScript**.

It also explains **EACH LINE OF CODE** in very simple words, perfect for beginners.

---

## 📁 Project Structure

```
/clock-project
│── clock.html
│── clock.js
│── README.md
```

---

## 📄 index.html (HTML File)

```html
<!DOCTYPE html>
```

🔹 Declares this file as an **HTML5 document**

---

```html
<html lang="en">
```

🔹 Root element of HTML page
🔹 `lang="en"` means English language

---

```html
<head>
```

🔹 Contains **meta information** (not visible on page)

---

```html
<meta charset="UTF-8">
```

🔹 Supports all characters and symbols

---

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

🔹 Makes page **responsive** on mobile devices

---

```html
<title>Clock In JS</title>
```

🔹 Title shown on browser tab

---

```html
</head>
```

🔹 Ends head section

---

```html
<body>
```

🔹 Visible content starts here

---

```html
<h1>Clock In JS</h1>
```

🔹 Main heading shown on page

---

```html
<div style="border: 1px solid red; height: 50px; width: 500px;">
```

🔹 Container box for the clock

---

```html
<h2 id="clock"></h2>
```

🔹 Empty heading
🔹 JavaScript will insert time here

---

```html
</div>
```

🔹 Ends container

---

```html
<script src="clock.js"></script>
```

🔹 Connects external JavaScript file
🔹 Placed at bottom so HTML loads first

---

```html
</body>
</html>
```

🔹 Ends HTML document

---

## 📄 clock.js (JavaScript File)

```javascript
function showTime() {
```

🔹 Creates a function named `showTime`
🔹 Function = block of reusable code

---

```javascript
let a = new Date();
```

🔹 Creates Date object
🔹 Gets current system date & time

---

```javascript
let h = a.getHours();
```

🔹 Gets current hour (0–23)

---

```javascript
let m = a.getMinutes();
```

🔹 Gets current minutes (0–59)

---

```javascript
let s = a.getSeconds();
```

🔹 Gets current seconds (0–59)

---

```javascript
let session = "AM";
```

🔹 Stores AM / PM
🔹 Default is AM

---

```javascript
if (h >= 12) session = "PM";
```

🔹 If hour is 12 or more → PM

---

```javascript
if (h > 12) h = h - 12;
```

🔹 Converts 24-hour format to 12-hour format

---

```javascript
if (h < 10) h = "0" + h;
```

🔹 Adds leading zero to hour
🔹 Example: 7 → 07

---

```javascript
if (m < 10) m = "0" + m;
```

🔹 Adds leading zero to minutes

---

```javascript
if (s < 10) s = "0" + s;
```

🔹 Adds leading zero to seconds

---

```javascript
document.getElementById("clock").innerText =
```

🔹 Finds HTML element with id `clock`
🔹 Sends text from JS to HTML

---

```javascript
h + ":" + m + ":" + s + " " + session;
```

🔹 Builds final time string
🔹 Example: `09:45:08 PM`

---

```javascript
}
```

🔹 Ends function

---

```javascript
setInterval(showTime, 1000);
```

🔹 Calls `showTime()` every 1 second
🔹 Makes clock live

---

```javascript
showTime();
```

🔹 Runs function immediately once
🔹 No delay on page load

---

## 🔁 How the Clock Works (Flow)

1️⃣ Page loads HTML
2️⃣ JS file loads
3️⃣ `showTime()` runs
4️⃣ Time is calculated
5️⃣ Time sent to HTML
6️⃣ Updates every second

---

## 🎯 Final Output Example

```
09:45:08 PM
```

---

## 🚀 Next Improvements (Practice Ideas)

* Show date (DD/MM/YYYY)
* Change color for AM / PM
* 24-hour format toggle
* Stylish digital clock UI

---

Happy Learning 💙
