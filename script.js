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

    renderPrices(price.monthly);

    function renderPrices (prices) {
        basicPlanHTMLElement.innerText=`$${prices.basic}`;
        proPlanHTMLElement.innerText = `$${prices.professional}`;
        masterPlanHTMLElement.innerText = `$${prices.master}`;
    }

    const planSelectorButton = document.querySelector('.toggle');
    const switchPlanSelector = document.querySelector('.switch');
    
    planSelectorButton.addEventListener('click', e =>{

        planSelectorButton.classList.toggle('monthly');
        switchPlanSelector.classList.toggle('switch-monthly');

        if (!planSelectorButton.classList.contains('monthly')){
            renderPrices(price.yearly);
        } else {
            renderPrices(price.monthly);
        }
    })
})


