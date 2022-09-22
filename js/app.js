

function getExpensesTotal(){
   
        const foodInput = document.getElementById('food-input');
        const foodCost = parseFloat(foodInput.value);
        const rentInput = document.getElementById('rent-input');
        const rentCost = parseFloat(rentInput.value);
        const clothesInput = document.getElementById('clothes-input');
        const clothesCost = parseFloat(clothesInput.value)
        if(foodCost < 0 || rentCost < 0 || clothesCost < 0){
            document.getElementById('food-error').style.display = 'block';
            return getExpensesTotal()
        }else{
            const totalCost = foodCost + rentCost + clothesCost;
            return totalCost; 
        }
             
        
                
  
};

function updateBalance(){
    const incomeInput = document.getElementById('income-input');
    const incomeAmount = parseFloat(incomeInput.value);
    const totalAmountcost = getExpensesTotal();
    const remainingBalance = incomeAmount - totalAmountcost;
     return remainingBalance; 
    
};

function savingBalance(){
    const incomeInput = document.getElementById('income-input');
    const parcentInput = document.getElementById('parcent-input');
    const parcentAmount = parseFloat(parcentInput.value)
    const incomeAmount = parseFloat(incomeInput.value);
    const savingMoney = (incomeAmount * parcentAmount) / 100;
    return savingMoney;
}


document.getElementById('calculate-btn').addEventListener('click',function(){
    const incomeInput = document.getElementById('income-input');

    const incomeAmount = parseFloat(incomeInput.value);
    const totalAmountcost = getExpensesTotal();
    const totalExpenses = document.getElementById('total-expenses');
    if(totalAmountcost > incomeAmount){
        return alert('please increase your income')
        
    }
    totalExpenses.innerText =totalAmountcost;
    const balance = document.getElementById('remain-balance');
    balance.innerText = updateBalance();
  
});

document.getElementById('save-btn').addEventListener('click',function(){
    const savings = savingBalance()
    const balance = document.getElementById('remain-balance');
    const balanceAmount = parseFloat(balance.innerText)
    
    const savingAmount = document.getElementById('saving-amount');
    if(balanceAmount < savings){
        return alert('you dont have enough money')
    }
    savingAmount.innerText = savings;
    const restBalance = document.getElementById('rest-balance');
    
    restBalance.innerText = parseFloat(balance.innerText) - savings;
     
})