// section-0----->
document.getElementById('btn-donate').addEventListener('click', function (event) {
    event.preventDefault(); 

    const addDonation = getInputFieldValueById('input-field-value');
    const accountBalance = getTextValueById('account-balance');
    const floodArea = getTextValueById('flood-area');
    const oldDonation = getTextValueById('old-donation-balance');

    if ((addDonation > 0) && (typeof parseFloat(addDonation) === 'number')) {

        if(parseFloat(addDonation) > parseFloat(accountBalance)){
            alert('Invalid Donation Amount');
            return;
        }
        const updateDonation = parseFloat(addDonation) + parseFloat(oldDonation);
        console.log(updateDonation);
        document.getElementById('old-donation-balance').innerText = updateDonation;

        const newPageBalance = parseFloat(accountBalance) - parseFloat(addDonation);
        console.log(newPageBalance);
        document.getElementById('account-balance').innerText = newPageBalance

        const currentTime = new Date()
        const div = document.createElement('div')
        div.innerHTML = `
            <div class="border  bg-[#F9F7F3] border-gray-200 rounded-lg p-8 mt-12">
                <p class=" text-lg font-bold ">${addDonation} Taka is ${floodArea}</p>
                <p class=" ">${currentTime}</p>
            </div>
            `
        document.getElementById('history-container').appendChild(div)

    }

    else {
        alert('Invalid Donation Amount');
    }

})


// section-2----->
document.getElementById('btn-donate-02').addEventListener('click', function (event) {
    event.preventDefault(); 

    const addDonation = getInputFieldValueById('input-field-value-02');
    const accountBalance = getTextValueById('account-balance');
    const floodArea = getTextValueById('flood-area-02');
    const oldDonation = getTextValueById('old-donation-balance-02');

    if ((addDonation > 0) && (typeof parseFloat(addDonation) === 'number')) {

        if(parseFloat(addDonation) > parseFloat(accountBalance)){
            alert('Invalid Donation Amount');
            return;
        }
        const updateDonation = parseFloat(addDonation) + parseFloat(oldDonation);
        console.log(updateDonation);
        document.getElementById('old-donation-balance-02').innerText = updateDonation;

        const newPageBalance = parseFloat(accountBalance) - parseFloat(addDonation);
        console.log(newPageBalance);
        document.getElementById('account-balance').innerText = newPageBalance

        const currentTime = new Date()
        const div = document.createElement('div')
        div.innerHTML = `
            <div class="border  bg-[#F9F7F3] border-gray-200 rounded-lg p-8 mt-12">
                <p class=" text-lg font-bold ">${addDonation} Taka is ${floodArea}</p>
                <p class=" ">${currentTime}</p>
            </div>
            `
        document.getElementById('history-container').appendChild(div)

    }

    else {
        alert('Invalid Donation Amount');
    }

})


// section-3----->
document.getElementById('btn-donate-03').addEventListener('click', function (event) {
    event.preventDefault(); 

    const addDonation = getInputFieldValueById('input-field-value-03');
    const accountBalance = getTextValueById('account-balance');
    const floodArea = getTextValueById('flood-area-03');
    const oldDonation = getTextValueById('old-donation-balance-03');

    if ((addDonation > 0) && (typeof parseFloat(addDonation) === 'number')) {

        if(parseFloat(addDonation) > parseFloat(accountBalance)){
            alert('Invalid Donation Amount');
            return;
        }
        const updateDonation = parseFloat(addDonation) + parseFloat(oldDonation);
        document.getElementById('old-donation-balance-03').innerText = updateDonation;
        const newPageBalance = parseFloat(accountBalance) - parseFloat(addDonation);
        document.getElementById('account-balance').innerText = newPageBalance

        const currentTime = new Date()
        const div = document.createElement('div')
        div.innerHTML = `
            <div class="border  bg-[#F9F7F3] border-gray-200 rounded-lg p-8 mt-12">
                <p class=" text-lg font-bold ">${addDonation} Taka is ${floodArea}</p>
                <p class=" ">${currentTime}</p>
            </div>
            `
        document.getElementById('history-container').appendChild(div)

    }

    else {
        alert('Invalid Donation Amount');
    }

})


// section-4----->
document.getElementById('btn-donate-04').addEventListener('click', function (event) {
    event.preventDefault(); 

    const addDonation = getInputFieldValueById('input-field-value-04');
    const accountBalance = getTextValueById('account-balance');
    const floodArea = getTextValueById('flood-area-04');
    const oldDonation = getTextValueById('old-donation-balance-04');

    if ((addDonation > 0) && (typeof parseFloat(addDonation) === 'number')) {

        if(parseFloat(addDonation) > parseFloat(accountBalance)){
            alert('Invalid Donation Amount');
            return;
        }
        const updateDonation = parseFloat(addDonation) + parseFloat(oldDonation);
        document.getElementById('old-donation-balance-04').innerText = updateDonation;
        const newPageBalance = parseFloat(accountBalance) - parseFloat(addDonation);
        document.getElementById('account-balance').innerText = newPageBalance

        const currentTime = new Date()
        const div = document.createElement('div')
        div.innerHTML = `
            <div class="border  bg-[#F9F7F3] border-gray-200 rounded-lg p-8 mt-12">
                <p class=" text-lg font-bold ">${addDonation} Taka is ${floodArea}</p>
                <p class=" ">${currentTime}</p>
            </div>
            `
        document.getElementById('history-container').appendChild(div);
     
    }

    else {
        alert('Invalid Donation Amount');
    }
 
})