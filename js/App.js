/*function App(props){

    let books = props.dataBook.map( book => (
        <Book 
            id={book.id}
            title={book.title}
            author={book.author}
            price={book.price}
        />
    ) );


    return [
        <Button title="Включить" handler={()=>{alert(1)}} />,
        books,
        <Footer year={(new Date).getFullYear()} />,
        <Footer />
    ];
}*/


class App extends React.Component {

    constructor(props) {
        super(props)
    
        this.state = {
             items: {}
        }
        this.addBasket = this.addBasket.bind(this);
    }
    
    addBasket( $id ){
        let newItems = Object.assign({}, this.state.items);
        if( $id  in newItems){
            newItems[ $id ]++;
        } else {
            newItems[ $id ] = 1;
        }
        this.setState({items: newItems});
        console.log(newItems);
    }

    removeBasket = id => {
        let newItems = {};

        for(let i in this.state.items){
            if(id != i){
                newItems[i] = this.state.items[i];
            }
        }

        this.setState({items: newItems});
    }



    render(){
        let books = this.props.dataBook.map( book => {
            if( book.price){ 
            return <Book 
                id={book.id}
                title={book.title}
                author={book.author}
                price={book.price}
                handleAddBasket={this.addBasket}
            />
            } else {
                return <BookWithoutPrice
                    id={book.id}
                    title={book.title}
                    author={book.author}
            />
            }
         } );
    
        

    


        return [
            <Basket items={this.state.items} handleRemoveBasket={this.removeBasket} />,
            <AddBookForm />,
            <Button title="Включить" handler={()=>{alert(1)}} />,
            <SearchForm />,
            books,
            <Footer year={(new Date).getFullYear()} />,
            <Footer />
        ];
    }
}