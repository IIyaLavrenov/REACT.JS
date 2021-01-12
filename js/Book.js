/*function Book(props){

    const price = price ? <b>{price}</b> : <del>&nbsp;</del>
    
    return (
        <div key={props.id}
    className='book book-default'
    >
        <h3>{ props['title'] }</h3>
        <img src={'http://placehold.it/100x120?text='+props['title']} />
        <p>Автор: { props['author'] }</p>
        <p>Цена: { price }руб.</p>
        <a className="btn btn-success" data-id={props['id']}>
            Сравнить
        </a>
    </div>
    )
}*/

class Book extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            selected: false,
            i: 0
        };

        this.compareHandler = this.compareHandler.bind(this);

    }

    componentDidMount() {
        //console.log('--', 'компонент смонтирован')
    }

    componentWillUnmount() {
        //console.log('--', 'компонент будет демонтирован')
    }

    compareHandler(ev){
        ev.preventDefault();
        console.log(this);
        console.log(ev);
        console.log(ev.target);
        this.setState({selected: !this.state.selected,
        i: this.state.i+1});
        console.log(this.state.i+1)
    }

    addBasket = ev => {
        ev.preventDefault();
        this.props.handleAddBasket(this.props['id']);
    }


    render(){
        const price = this.props.price ? <b>{this.props.price}</b> : <del>&nbsp;</del>
    
    return (
        <div key={this.props.id}
             className={'book ' + (this.state.selected ? 'book-selected' : 'book-default')}
        >

        <h3>{ this.props['title'] }</h3>
        <img src={'http://placehold.it/100x120?text='+this.props['title']} />
        <p>Автор: { this.props['author'] }</p>
        <p>Цена: { price }руб.</p>
        <a className="btn btn-success"
           data-id={this.props['id']}
           onClick={this.compareHandler}
           href="#"
        >
        Сравнить
        </a>    
        <a className="btn btn-success"
           data-id={this.props['id']}
           onClick={this.addBasket}
           href="#"
        >
        В корзину!
        </a>
    </div>
    )
    }
}