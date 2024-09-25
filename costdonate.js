// Cost donate in Noakhali

document.getElementById("btn-add-donate").addEventListener('click',function(event){
    event.preventDefault();


    const adddonate = document.getElementById("input-add-money").value;
    console.log(typeof adddonate);


    if (adddonate > 0 && adddonate < 5500){
        console.log('Adding money to your account');
    
        // step: 4 get the current balance
        const balance = document.getElementById("account-balance").innerText;
        console.log(typeof balance);
    
        // step : 5 add addmoney input with balance
        const deletMoney = parseFloat(adddonate);
        const totalDonation = parseFloat(balance);
        const newdonation = totalDonation - deletMoney;
        console.log(newdonation);
    
        // step 6 Update the balance
        document.getElementById("account-balance").innerText = newdonation;
    
    
    }
    
    else{
        alert('Faild to add money. please try again');
    }

    
});

// Cost donate in Feni

document.getElementById("btn-add-donate").addEventListener('click',function(event){
    event.preventDefault();


    const adddonate = document.getElementById("input-add-money").value;
    console.log(typeof adddonate);


    if (adddonate > 0 && adddonate < 5500){
        console.log('Adding money to your account');
    
        // step: 4 get the current balance
        const balance = document.getElementById("account-balance").innerText;
        console.log(typeof balance);
    
        // step : 5 add addmoney input with balance
        const deletMoney = parseFloat(adddonate);
        const totalDonation = parseFloat(balance);
        const newdonation = totalDonation - deletMoney;
        console.log(newdonation);
    
        // step 6 Update the balance
        document.getElementById("account-balance").innerText = newdonation;
    
    
    }
    
    else{
        alert('Faild to add money. please try again');
    }

    
});

// Cost donate in Quota

document.getElementById("btn-add-donate").addEventListener('click',function(event){
    event.preventDefault();


    const adddonate = document.getElementById("input-add-money").value;
    console.log(typeof adddonate);


    if (adddonate > 0 && adddonate < 5500){
        console.log('Adding money to your account');
    
        // step: 4 get the current balance
        const balance = document.getElementById("account-balance").innerText;
        console.log(typeof balance);
    
        // step : 5 add addmoney input with balance
        const deletMoney = parseFloat(adddonate);
        const totalDonation = parseFloat(balance);
        const newdonation = totalDonation - deletMoney;
        console.log(newdonation);
    
        // step 6 Update the balance
        document.getElementById("account-balance").innerText = newdonation;
    
    
    }
    
    else{
        alert('Faild to add money. please try again');
    }

    
});


