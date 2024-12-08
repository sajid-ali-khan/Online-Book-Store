function makeBookPlaceholder(){
    let outerDivClasses = "bg-white p-4 rounded-lg shadow-lg space-y-4".split(" ");
    let imageDivClasses = "bg-gray-300 h-48 w-full rounded-lg animate-pulse".split(" ");
    let titleDivClasses = "text-lg font-semibold text-gray-900 h-6 bg-gray-300 animate-pulse".split(" ");
    let authorDivClasses = "text-gray-500 h-4 bg-gray-300 animate-pulse".split(" ");
    let btnDivClasses = "text-center";
    let btnClasses = "bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-400".split(" ");


    let placeholder = document.createElement('div');
    let imagePlaceholder = document.createElement('div');
    let titlePlaceholder = document.createElement('div');
    let authorPlaceholder = document.createElement('div');
    let btnDiv = document.createElement('div');
    let btn = document.createElement('button');
    
    placeholder.classList.add(...outerDivClasses);
    imagePlaceholder.classList.add(...imageDivClasses);
    titlePlaceholder.classList.add(...titleDivClasses);
    authorPlaceholder.classList.add(...authorDivClasses);
    btnDiv.classList.add(btnDivClasses);
    btn.classList.add(...btnClasses);
    btn.textContent = "Add to Cart";

    btnDiv.appendChild(btn);
    placeholder.appendChild(imagePlaceholder);
    placeholder.appendChild(titlePlaceholder);
    placeholder.appendChild(authorPlaceholder);
    placeholder.appendChild(btnDiv);
    

    return placeholder;
}


function addPlaceholdersToContainer(containerId, n){
    let container = document.getElementById(containerId);
    
    for (let i = 1; i <= n; i++){
        let placeholder = makeBookPlaceholder();
        container.appendChild(placeholder);
    }
}

addPlaceholdersToContainer("bookContainer", 8);