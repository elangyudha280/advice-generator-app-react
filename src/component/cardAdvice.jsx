import react,{Component} from 'react'


// component card

class CardAdvice extends Component {
    constructor(props){
        super();
    }

    render(){
        return(
            <section className="container">
                <h2 className="title-card">Advice # <span className="rules-title">11</span></h2>
                <p className="kuotes">
                    "
                    <span className="kuotes-content">
                    It is easy to sit up and take notice,what's difficult is getting up and taking action
                    </span>
                    ."
                </p>
                <img src="images/pattern-divider-desktop.svg" alt="" className="img-pattern " />
                <button className="random">
                    <img src="images/icon-dice.svg" alt="" />
                </button>
            </section>
        )
    }
}

export default CardAdvice;