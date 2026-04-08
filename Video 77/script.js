function createCard(title, cName, views, monthsOld, duration, thumbnail){
    if (views<1000000){
        let viewStr = views/1000 + "k";
    }
     else (views>1000000){
        let viewStr = views/1000000 + "M";
    }
    let html = ` <div class="card">
            <div class="image">
                <img src="${thumbnail}" alt="">
                <div>
            </div>
            <div class="text">
                <h1>${title}</h1>
                <p>${cName} . ${viewStr} views . 2 months ago</p>
            </div>
        </div>`
}