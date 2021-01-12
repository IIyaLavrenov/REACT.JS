class BookWithoutPrice extends React.Component {

    render(){
    
    return (
        <div key={this.props.id}
             className={'book book-default'}
    >
        <h3>{ this.props['title'] }</h3>
        <img src={'http://placehold.it/100x120?text='+this.props['title']} />
        <p>Автор: { this.props['author'] }</p>
    </div>
    )
    }
}