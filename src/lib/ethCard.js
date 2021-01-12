import styles from '../css/eth-card.scss'


const template = document.createElement('template')

///view for the card//
template.innerHTML = `
    <style>${styles.toString()}</style> 

    <div class='eth-plugin-widget'>
        <p>Ethereum Stats</p>
        <div class='data'>
            <p class='price'></p>
            <p>CAD</p>
        </div>
        <section class='actions'>
            <button>Buy</button>
            <button>Sell</button>
        </section>
    </div>
`

export class ETHCard extends HTMLElement {
    constructor() {
        super()

        // add a shadow DOM//
        const shadowDOM = this.attachShadow({mode:'open'})

        // render the template in the shadow DOM//
        shadowDOM.appendChild(template.content.cloneNode(true))

        //binding methods//
        this.loadETHPrice = this.loadETHPrice.bind(this)
        this.redirectToUniswap = this.redirectToUniswap.bind(this)
            
    }

    connectedCallback() {
        this.loadETHPrice()

        // get both buttons - buy/sell
        const buyBtn = this.shadowRoot.querySelector('.actions button')
        const sellBtn = this.shadowRoot.querySelector('.actions button:nth-of-type(2)')

        //add on method to the buttons//
        buyBtn.onclick = this.redirectToUniswap
        sellBtn.onclick = this.redirectToUniswap
    }

    loadETHPrice() {

        let price = this.shadowRoot.querySelector('.eth-plugin-widget .price')
        fetch('https://rest.coinapi.io/v1/exchangerate/ETH/CAD', {
            method: 'GET',
            headers: {
                "X-CoinAPI-Key": "EDD3F553-7581-4445-8615-E2DAC4EC264B"
            }
        })
        .then(response => response.json())
        .then(data => {
            console.log(data)
            price.textContent = `$ ${data.rate}`
            return data.rate
        })
        .catch(error => {
            console.error('Error: ', error)
        })    
    }

    redirectToUniswap() {
        window.open('https://uniswap.org/', '_blank')
    }

}