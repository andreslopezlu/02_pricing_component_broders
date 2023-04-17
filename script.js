window.addEventListener('load', e => {

  	const price = {
		monthly: {
			basic: 19.99,
			professional: 24.99,
			master: 39.99
		},
		yearly: {
			basic: 199.99,
			professional: 249.99,
			master: 399.99
		}
	}
    
    const basicPlanHTMLElement = document.querySelector('.basic-content .plan-price');
    const proPlanHTMLElement = document.querySelector('.professional-content .plan-price');
    const masterPlanHTMLElement = document.querySelector('.master-content .plan-price');

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


