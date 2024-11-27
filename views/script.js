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
            }, 1500)
        } else if (xhr.readyState === 4) {
            console.log("Request failed:", xhr.status);
        }
    };

    const data = JSON.stringify({ content: (content) });
    xhr.send(data);
}
//  w a d w a a w a d s w d s s a w d d w a a w w a w d w d w w s w s s w w w w a a a s a w s d d a s a w d a s d d w s w w w w d s w a w w s s w d a d a d w d a w a d s w s s a d d s s a d a s d s w w s d w d s a s a s s w s d d s s a a a s w d d w s a w a d d a d w a w w d a s s d s s a d w d d w d w a d a a a a s d w a w d w s w s a w s d s d s d d d w w w s d s a w w w d d a a s w a a d w s a s w a w a w s d w w w s d w d d a s a a s d d s s a d s a d a d w a s d d a a a d d d w a a a d a d s s s a s d w s s a s w w s a a s w d s d a a s w w a d d w w a d d s w s w w d s a a d w d w s d w w a w a d a a w w d w w w s w w w s s d d d a a w a s d a w a d s a s d w a s d w d d d s d s s d d d a w s s d a s w s s w s w w a w d s d w s w d a a a a s w w d d s w s w s s a d w d w a d s w a d d s d s s s a a a d a w d w d s w w s s d w w s a w a w a s w s s w a a a a d a a a d a s d s w w w w w a a a s w s w a a a w s w s w a w w s s w w a s w w a w w d a s w d d s d a w w s w d d d d s a w w w d a a d s w a w w w w w d w d a d w d a w d a a a s a s s w a w w a w d s w d w d d w d d d w s a a a d d w s w s d s d a s s s a w a s d d w d d w s a s w w d d d s a w d d w s s d d d d a a d d s d w d d s a s a w d a a d d a w w s w s d s d w s a w w d d s s s w w s a s d s s a w d s d w w d w s d w d s d d w d a a d w d d d w d w w s d d s a w d d a w w d a w a s w s a w a a a w d w w a d s d s a s a a s a d w d a s d s w a a a a w s a s w w w s s s a a d w a s w s d s w s a a s d s s d w a d w w d a w w w d a d w s d s w a a a s s a w a s w s s w s a a s a w a a d a s s w w s a s d a d a a w s d w w a s d d d d d a w s a a s a w w a w s w s s a d a a s s a s w s a a s d d a d d d d w d d w w w w w s w s a d s s d s a w a d a d d d w s a a s w d s w d s d d d a a a w a s d s s d d d a d s s a a s a d w d w s a a s s a a d s s s w a a a s a d w w d w d d d a s d w d d w s d w w s w s s d a s d s w d a d a d s w w s w s d d a d w w w w d a w s w w d w s a w a a a w d s w d asd  d d d d d d d d d d d d d d d d d d d d