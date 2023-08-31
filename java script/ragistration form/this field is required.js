//validation for this field is required
// for use this add class "thisrequired"



let reqfields = document.getElementsByClassName("thisrequired")
for (let index = 0; index < reqfields.length; index++) {
    // console.log(reqfields);
    reqfields[index].addEventListener("blur", (event) => {
        console.log(event);
        let txt = document.createElement("SPAN");
        txt.innerHTML = "  *this field is required.."
txt.style.color="red"
        if (reqfields[index].value == "") {
            if (reqfields[index].nextSibling == null) {
                reqfields[index].parentNode.appendChild(txt)
            }
        } else {
            if (reqfields[index].nextSibling != null) {
                if (reqfields[index].nextSibling.nodeName == "SPAN") {
                    reqfields[index].nextSibling.remove()
                }
            }
        }
    })
}


