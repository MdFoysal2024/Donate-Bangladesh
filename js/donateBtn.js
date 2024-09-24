console.log('Donate Now')

document.getElementById('btn-donate').addEventListener('click', function (event) {
    event.preventDefault();
    const addDonation = getInputFieldValueById('input-field-value');
    //console.log(addDonation);

    const pageBalance = getTextValueById('page-balance');
    //console.log(donationBalance);

    const floodArea = getTextValueById('flood-area');
    console.log(floodArea);

    const oldDonation = getTextValueById('old-donation-balance');
    console.log(oldDonation);


    //const createElementByTag = getTextValueById('history-container');
    //console.log(oldDonation);



    if (  (addDonation > 0) && (typeof parseFloat(addDonation) === 'number')) {

        const updateDonation = parseFloat(addDonation) + parseFloat(oldDonation);
        console.log(updateDonation);
        document.getElementById('old-donation-balance').innerText = updateDonation;

        const newPageBalance = parseFloat(pageBalance) - parseFloat(addDonation);
        console.log(newPageBalance);
        document.getElementById('page-balance').innerText = newPageBalance

        const currentTime = new Date()
        const createPara = document.querySelector('#history-container');

        const div = document.createElement('div')
        //console.log(div);
        div.innerHTML = `
            <div class="border font-bold bg-[#F9F7F3] border-gray-200 rounded-lg p-8 mt-12">
                <p>${addDonation} Taka is ${floodArea}</p>
                <p>${currentTime}</p>
            </div>
            `
        // const para1 = document.createElement('p');
        // para1.innerText = `${addDonation} Taka is ${floodArea} `;

        // const para2 = document.createElement('p');
        // para2.innerText = `${addDonation} Taka is money ${floodArea} `;

        // div.appendChild(para1);
        // div.appendChild(para2);

        //     const div = document.createElement('div')
        //     console.log(para);

        //     para.innerText = `
        //     ${addDonation} Taka is ${floodArea} 
        //    Data
        //      `;
        createPara.appendChild(div);
        console.log(createPara)
    }

    else {
        alert('Invalid Donation Amount')
    }

})