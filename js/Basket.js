class Basket extends React.Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }

    getIndexByID( id ){
        for( let p in dataBook){
            if( id == dataBook[p]['id']){
                return p;
            }
        }
    }

    deleteItem = ev => {
        ev.preventDefault;
        this.props.handleRemoveBasket(ev.target.id);
    }

    render = () => {
        let items = [], sum =0;
        for(let i in this.props.items){
            let j = this.getIndexByID( i );
            sum += this.props.items[i] * dataBook[j]['price'];
            items.push(
             <div className="basket-item">
              <a href="#">{dataBook[j]['title']}</a>
              <span>{this.props.items[i]}шт</span>
              <span>{this.props.items[i] * dataBook[j]['price']}руб</span>
              <a href="#" onClick={this.deleteItem} id={i}>Удалить</a>
             </div>
           )  
        }
        items.push(
            <div className="basket-item">
             <span>Итого: {sum}руб.</span>
            </div>
        )

        return <div className='basket'>
            <h3>Корзина</h3>
            {items}
            </div>
    }
}