const createElement = (tag,parent,className,id,text) => {
    const elem = document.createElement(tag);

    parent.appendChild(elem);

    elem.classList.add(className);

    if(id) {
        elem.id = id;
    }
    if(text) {
        elem.innerText = text;
    }

    return elem;
}