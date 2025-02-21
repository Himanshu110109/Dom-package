# **easydom-pro Package 🚀**  

**easydom-pro** is a lightweight JavaScript library that makes **DOM manipulation easy** without using any external dependencies like React or jQuery.  

---

## **✨ Features**  

✅ **DOM Selection** (similar to `document.querySelectorAll()`)  
✅ **Show/Hide Elements** (`.show()` & `.hide()`)  
✅ **Add Event Listeners** (`.on()`)  
✅ **Change CSS Dynamically** (`.css()`)  
✅ **Update HTML & Text Content** (`.html()` & `.text()`)  

---

## **📌 Installation**  

### **1️⃣ Using CDN (No Node.js Required)**  
If you're working with plain **HTML, CSS, and JavaScript**, add this in your HTML file:  

```html
<script src="https://cdn.jsdelivr.net/npm/easydom-pro@latest/index.min.js"></script>
```

---

### **2️⃣ Using npm (For Node.js & Bundlers)**  
If you're working in a **Node.js project**, install the package using:  

```sh
npm install easydom-pro
```

Then, import it into your JavaScript file:  

```js
const dom = require("easydom-pro");
```

---

## **📌 Usage Example**  

```js
// Select Element & Change Text  
dom("#myDiv").text("Hello, world!");

// Add Click Event  
dom("#btn").on("click", () => alert("Button Clicked!"));

// Hide & Show Elements  
dom("#myDiv").hide().show();

// Change CSS  
dom("p").css({ color: "red", fontSize: "20px" });
```

---

## **📌 Contribution**  

If you find any **bugs** or have **feature suggestions**, feel free to open an **issue** or submit a **pull request**! 😃  

🔗 **GitHub Repo:** [https://github.com/Himanshu110109/Dom-package](https://github.com/Himanshu110109/Dom-package)  

---

## **📌 License**  

📝 **Apache 2.0 License** – Free to use & modify!  

🔥 Created by **Himanshu Chandani**