// <input type="text" id="input">
const data = {};
const input = document.getElementById("input");
Object.defineProperty(data, "text", {
    set(value) {
        input.value = value;
        this.value = value;
    }
})
input.onchange = function(e) {
    data.text = e.target.value;
}