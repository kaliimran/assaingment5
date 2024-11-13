

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

        const priceString = document.getElementsByClassName('priceTag');
        let seatPriceTotal = 0;
        for(let i = 0; i < priceString.length; i++){
            const priceValue = priceString[i].innerText;
            const price1 = parseFloat(priceValue);
            seatPriceTotal = seatPriceTotal + price1;
        }
        totalTagInput.innerText = seatPriceTotal;
        const grandTotalInput = document.getElementById('GrandTag');
        grandTotalInput.innerText = seatPriceTotal;

        for(let i = 0; i < priceString.length; i++){
            const applyBtn = document.getElementById('applyBtn');
            if(priceString.length >= 4){
                applyBtn.disabled = false;
                applyBtn.addEventListener('click', applyFunction)
            }
            else{
                applyBtn.disabled = true;
            }
        }



    })
}


function applyFunction(){
    const applyFieldInput = document.getElementById('applyField');
    const applyField = applyFieldInput.value;

    const grandTotalInput = document.getElementById('GrandTag');

    const totalTagInput = document.getElementById('totalTag');
    const totalTagText = totalTagInput.innerText;
    const totalTag = parseFloat(totalTagText);

    if(applyField === 'NEW15'){
        const totalTagPer = totalTag * .15;
        const result = totalTag - totalTagPer;
        grandTotalInput.innerText = result
    }
    else if(applyField === 'Couple 20'){
        const totalTagPer = totalTag * .20;
        const result = totalTag - totalTagPer;
        grandTotalInput.innerText = result
    }
    else{
        alert('Invalid Coupon code')
    }
}

