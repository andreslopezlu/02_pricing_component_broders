window.addEventListener('load', e => {

    const monthlyPriceBasic = 19.99;
    const monthlyPriceProfessional = 24.99;
    const monthlyPriceMaster = 39.99;

    const yearlyPriceBasic = 199.99;
    const yearlyPriceProfessional = 249.99;
    const yearlyPriceMaster = 399.99;
    
    const planPriceBasic = document.querySelector('.basic-content .plan-price');
    const planPriceProfessional = document.querySelector('.professional-content .plan-price');
    const planPriceMaster = document.querySelector('.master-content .plan-price');

    renderMonthlyPrice();

    function renderMonthlyPrice () {
        planPriceBasic.innerText=`$${monthlyPriceBasic}`;
        planPriceProfessional.innerText = `$${monthlyPriceProfessional}`;
        planPriceMaster.innerText = `$${monthlyPriceMaster}`;
    }
    
    function renderYearlyPrice () {
        planPriceBasic.innerText=`$${yearlyPriceBasic}`;
        planPriceProfessional.innerText = `$${yearlyPriceProfessional}`;
        planPriceMaster.innerText = `$${yearlyPriceProfessional}`;
    }

    const planSelectorButton = document.querySelector('.toggle')
    
    planSelectorButton.addEventListener('click', e =>{

        planSelectorButton.classList.toggle('monthly')

        if (!planSelectorButton.classList.contains('monthly')){
            renderYearlyPrice();
        } else {
            renderMonthlyPrice();
        }
    })
})


