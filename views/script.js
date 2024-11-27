document.querySelector("button").addEventListener("click", submit);

function submit() {
    const inputBox = document.getElementById("inputbox");
    const content = inputBox.value;

    if(!content) { return alert("yarr matey you didnt put any message content") }
    const xhr = new XMLHttpRequest();
    xhr.open("POST", "/pirate", true);
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            console.log("Request successful:", JSON.parse(xhr.responseText).text);
            document.getElementById("output").innerHTML = JSON.parse(xhr.responseText).text
            setTimeout(function(){
                document.getElementById("output").innerHTML = "";
            }, 6000)
        } else if (xhr.readyState === 4) {
            console.log("Request failed:", xhr.status);
        }
    };

    const data = JSON.stringify({ content: (content) });
    xhr.send(data);
}
