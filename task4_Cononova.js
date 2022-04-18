document.addEventListener("DOMContentLoaded", () => {
    let list = document.createElement('ol');
    const addElement = () => {
        let listElement = [];
        let i = 0;
        let timer = setInterval(() => {
            
            i++;
            listElement = document.createElement('li');
            listElement.innerHTML = `Element Nr. ${i}`;
            if(i%2 ==0) listElement.style.backgroundColor = "#09814A"
            else listElement.style.backgroundColor = "#443850";
            list.append(listElement);
        }, 2000);
        setTimeout(() => {
            clearInterval(timer);
        }, 40000);
    }
    document.body.append(list);
    addElement();
});
document.getElementsByTagName("ol").id = "lista";
