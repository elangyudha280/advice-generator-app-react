import react,{Component} from 'react'



// component card

class CardAdvice extends Component {
    constructor(props){
        super();
        this.state = {
            data:`It is easy to sit up and take notice,what's difficult is getting up and taking action.`,
            isLoaded:false,
        }
    }


    GetData = ()=>{
        let random = Math.floor(Math.random() * 120);
        fetch(`https://api.adviceslip.com/advice/${random}`).then(Response =>{
            if(!Response.ok){
                throw new Error('oops something wrong')
            }
            return Response.json()
        })
        .then(data_api =>{
            this.setState({
                data:data_api.slip,
                isLoaded:true
            })
        })
        .catch(err =>{
            this.setState({
                isLoaded:false,
            })
        })
    }

    render(){
        return(
            <section className="container">
                <h2 className="title-card">Advice # <span className="rules-title">{this.state.data.id}</span></h2>
                <p className="kuotes">
                    "
                    <span className="kuotes-content">
                    {
                     (!this.state.isLoaded) ? this.state.data  : this.state.data.advice
                    }
                    </span>
                    ."
                </p>
                <img src="images/pattern-divider-desktop.svg" alt="" className="img-pattern " />
                <button className="random" onClick={this.GetData}>
                    <img src="images/icon-dice.svg" alt="" />
                </button>
            </section>
        )
    }
}

export default CardAdvice;