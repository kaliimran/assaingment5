

const show = document.getElementsByClassName('find');
for(let i = 0; show.length> i; i++){
    show[i].addEventListener('click', function showing(){
        // show[i].style.backgroundColor = '#1DD100';
        // this.style.color = 'white';

        show[i].classList.add('!bg-[#1DD100]');
        show[i].classList.add('!text-white');

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


        
        




        let totalCountNumber = 0;

        for(let i = 0; i < priceString.length; i++){
            const totalSeatCountObject = document.getElementById('countSeatTotal');
            const totalSeat = 40 - priceString.length;
            totalSeatCountObject.innerText = totalSeat
            const totalSeatCountNumber = document.getElementById('totalSeatCount');
            const seatTotal = totalCountNumber + priceString.length;
            totalSeatCountNumber.innerText = seatTotal;
            totalSeatCountNumber.style.backgroundColor = '#1DD100';
            totalSeatCountNumber.style.color = 'white';
            totalSeatCountNumber.style.padding = '3px'
            totalSeatCountNumber.style.marginLeft = '3px'
            totalSeatCountNumber.classList.add('rounded-lg')
            
        }


        const nameInputValue = document.getElementById('nameInput');
        const nameInput = nameInputValue.value;
        const phoneInputValue = document.getElementById('phoneInput');
        const phoneInput = phoneInputValue.value;
        const nextBtn = document.getElementById('nextBtn');
        if (nameInput === " " || phoneInput === " ") {
            nextBtn.disabled = true;
        }
        else {
            nextBtn.disabled = false;
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

    const applyBox = document.getElementById('applyBox');
    const discountSection = document.getElementById('discountSection');
    const discountTag = document.getElementById('discountTag');

    if(applyField === 'NEW15'){
        const totalTagPer = totalTag * .15;
        const result = totalTag - totalTagPer;
        grandTotalInput.innerText = result;
        applyBox.classList.add('hidden');
        discountSection.classList.remove('hidden');
        discountTag.innerText = totalTagPer;
    }
    else if(applyField === 'Couple 20'){
        const totalTagPer = totalTag * .20;
        const result = totalTag - totalTagPer;
        grandTotalInput.innerText = result;
        applyBox.classList.add('hidden');
        discountSection.classList.remove('hidden');
        discountTag.innerText = totalTagPer;
    }
    else{
        alert('Invalid Coupon code')
    }
}


nextBtn.addEventListener('click', function button(){
    const section1 = document.getElementById('section1');
    section1.classList.add('hidden');
    const section2 = document.getElementById('section2');
    section2.classList.remove('hidden');
    const detailsShow = document.getElementById('purchaseInfo')
    detailsShow.innerHTML = ``;
})

const continueBtn = document.getElementById('continueBtn');
continueBtn.addEventListener('click', function againContinue(){
    const section2 = document.getElementById('section2');
    section2.classList.add('hidden');
    const section1 = document.getElementById('section1');
    section1.classList.remove('hidden');
})

