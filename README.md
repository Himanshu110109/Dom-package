---

# 🌟 **easydom-pro Package** 🚀  

**easydom-pro** is a lightweight JavaScript library that makes **DOM manipulation easy** without using any external dependencies like React or jQuery.  

---

## ✨ **Features**  

✅ **DOM Selection** (similar to `document.querySelectorAll()`)  
✅ **Show/Hide Elements** (`.show()` & `.hide()`)  
✅ **Add Event Listeners** (`.on()`)  
✅ **Change CSS Dynamically** (`.css()`)  
✅ **Update HTML & Text Content** (`.html()` & `.text()`)  

---

## 📌 **Installation**  

If you're using a **direct script file**, add this in your HTML:  

```html
<script src="easydom-pro.js"></script>

If you're using npm, install it with:

npm install easydom-pro

And import it in your JavaScript file:

const dom = require("easydom-pro");


---

📌 Usage Example

// Select Element & Change Text
dom("#myDiv").text("Hello, world!");

// Add Click Event
dom("#btn").on("click", () => alert("Button Clicked!"));

// Hide & Show Elements
dom("#myDiv").hide().show();

// Change CSS
dom("p").css({ color: "red", fontSize: "20px" });


---

📌 Contribution

If you find any bugs or have feature suggestions, feel free to open an issue or submit a pull request! 😃

GitHub Repo: https://github.com/Himanshu110109/Dom-package


---

📌 License

📝 Apache 2.0 License


---

🔥 Created by Himanshu Chandani

---

