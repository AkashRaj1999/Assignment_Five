// Add donate for Noakhali

document.getElementById("btn-add-donate").addEventListener('click',function(event){
    event.preventDefault();


    const adddonate = document.getElementById("input-add-money").value;
    console.log(typeof adddonate);


    if (adddonate > 0 && adddonate < 5500){
        console.log('Adding money to your account');
        window.location.href = "Model.html";
    
        // step: 4 get the current balance
        const balance = document.getElementById("btn-donate-bd").innerText;
        console.log(typeof balance);
    
        // step : 5 add addmoney input with balance
        const addMoney = parseFloat(adddonate);
        const balanceDonation = parseFloat(balance);
        const newBalance = addMoney + balanceDonation;
    
        console.log(newBalance);
    
        // step 6 Update the balance
        document.getElementById("btn-donate-bd").innerText = newBalance;
    
    
    }
    
    else{
        alert('Faild to add money. please try again');
    }

    
});

// Add donate for Feni

document.getElementById("btn-add-donate-fn").addEventListener('click',function(event){
    event.preventDefault();


    const adddonate = document.getElementById("input-add-money-fn").value;
    console.log(typeof adddonate);


    if (adddonate > 0 && adddonate < 5500){
        console.log('Adding money to your account');
    
        // step: 4 get the current balance
        const balance = document.getElementById("btn-donate-fn").innerText;
        console.log(typeof balance);
    
        // step : 5 add addmoney input with balance
        const addMoney = parseFloat(adddonate);
        const balanceDonation = parseFloat(balance);
        const newBalance = addMoney + balanceDonation;

        console.log(newBalance);
    
        // step 6 Update the balance
        document.getElementById("btn-donate-fn").innerText = newBalance;
    
    
    }
    
    else{
        alert('Faild to add money. please try again');
    }

    
});

// Add donate for Quota

document.getElementById("btn-add-donate").addEventListener('click',function(event){
    event.preventDefault();


    const adddonate = document.getElementById("input-add-money").value;
    console.log(typeof adddonate);


    if (adddonate > 0 && adddonate < 5500){
        console.log('Adding money to your account');
    
        // step: 4 get the current balance
        const balance = document.getElementById("btn-donate-bd").innerText;
        console.log(typeof balance);
    
        // step : 5 add addmoney input with balance
        const addMoney = parseFloat(adddonate);
        const balanceDonation = parseFloat(balance);
        const newBalance = addMoney + balanceDonation;
        console.log(newBalance);
    
        // step 6 Update the balance
        document.getElementById("btn-donate-bd").innerText = newBalance;
    
    
    }
    
    else{
        alert('Faild to add money. please try again');
    }

    
});





