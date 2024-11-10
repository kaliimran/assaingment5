/* const show = document.getElementById('class');
show.addEventListener('click', function change(){
    this.style.backgroundColor = '#1DD100';
    this.style.color = 'white'
}); */

const show = document.getElementsByClassName('find');
for(let i = 0; show.length> i; i++){
    show[i].addEventListener('click', function showing(){
        show[i].style.backgroundColor = '#1DD100';
        this.style.color = 'white';
        // console.log(show[i]);
        const detailsShow = document.getElementById('purchaseInfo');
        const chairClassInput = document.getElementById('classFor');
        const chairClass = chairClassInput.innerText;
        const seatShow = show[i].innerText;

        const h1 = document.createElement('h1');
        h1.innerText = seatShow;

        const p = document.createElement('p');
        p.innerText = chairClass;

        const price = document.createElement('p');
        price.innerText = 550;
        price.classList.add('priceTag')
        
        detailsShow.appendChild(h1);
        detailsShow.appendChild(p);
        detailsShow.appendChild(price);


        /* Price Tag Calculate */
        const totalTagInput = document.getElementById('totalTag');
        const totalTagText = totalTagInput.innerText;
        const totalTag = parseFloat(totalTagText);
        const priceString = document.getElementsByClassName('priceTag');
        let seatPriceTotal = 0;
        for(let i = 0; i < priceString.length; i++){
            console.log(typeof priceString[i].innerText);
            const priceValue = priceString[i].innerText;
            const price1 = parseFloat(priceValue);
            seatPriceTotal = seatPriceTotal + price1;
        }
        totalTagInput.innerText = seatPriceTotal;

    })
}

/* function showing(){
    this.style.backgroundColor = '#1DD100'
    this.style.color = 'white';
    const detailsShow = document.getElementById('purchaseInfo');
    const h1 = document.createElement('h1');
    // h1.innerText = show[i];
    console.log(show[i])
} */

