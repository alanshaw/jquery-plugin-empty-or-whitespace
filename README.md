jquery-plugin-empty-or-whitespace
=================================

> Add a CSS class to elements that are empty or contain only whitespace.

Usage
---

Add `jquery.empty-or-whitespace.js` to you page after jquery. Then select elements you want to detect and call the plugin:

```html
<div>
</div>
<div><div></div></div>
<script src="//code.jquery.com/jquery-1.10.1.min.js"></script>
<script src="jquery.empty-or-whitespace.js"></script>
<script>
  $("div").emptyOrWhitespace()
</script>
```

Output:

```html
<div class="empty-or-whitespace">
</div>
<div><div class="empty-or-whitespace"></div></div>
```

You can specify the CSS class name by passing it as the first parameter to the plugin function call e.g.

```javascript
$("div").emptyOrWhitespace("empty")
```
