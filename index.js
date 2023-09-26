console.log("hi");
window.onload = (event => {

    addProject("To-Do List", " https://to-do-j7kt.onrender.com/", "./public/to-do.png", "screenshot of to-do list app" );
    function addProject(name, url, img, alt){
        let divOut = document.querySelector(".grid");
        divOut.classList.add("project");

        let divIn = document.createElement("div");
        divIn.classList.add("project");

        let a = document.createElement("a");
        a.setAttribute("target", "_blank");
        a.setAttribute("href", url);

        let p = document.createElement("p");
        p.classList.add("project-title");
        p.innerText = name;

        let image = document.createElement("img");
        image.setAttribute("src", "img");
        image.setAttribute("width", "50%");
        img.setAttribute("alt", alt);

        a.appendChild(p);
        a.appendChild(image);

        divIn.appendChild(a);
        divOut.appendChild(divIn);
        console.log("added");
    }
});