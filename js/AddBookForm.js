class AddBookForm extends React.Component{
 
    constructor(props){
        super(props);

        this.state = {
          id: 0,
          title: "",
          author: "",
          price: ""     
        };
       
     }

     handleSubmit = ev => {
         ev.preventDefault();
        const {id, title, author, price} = this.state;
        if( id && title && author && price){
            dataBook.push({
                id,
                title,
                author,
                price
            });
            this.setState({
                id: 0,
                title: "",
                author: "",
                price: ""
            });
            console.log(dataBook)
        } else {
            alert('Заполните поля корректно!')
        }

     }


     handleChange = ev => {
      ev.preventDefault();
      const newState = {};
      newState[ev.target.name]=ev.target.value;
      this.setState(newState);
     }
    
     render(){
      return <div>
        <h2>Добавление книги</h2> 
        <form action="" onSubmit={this.handleSubmit} className="addbookform">   
        <div>id<input type="text" name="id" onChange={this.handleChange} value={this.state.id} autoComplete="off" /></div>
        <div>Название<input type="text" name="title"  onChange={this.handleChange} value={this.state.title} ref={this.setRefInputTitle} autoComplete="off" /></div>
        <div>Авторы<input type="text" name="author"  onChange={this.handleChange} value={this.state.author} autoComplete="off"/></div>
        <div>Цена<input type="text" name="price"  onChange={this.handleChange} value={this.state.price} autoComplete="off"/></div>
        <div><input type="submit" value="Добавить" className="btn btn-success"/></div>
        </form>
        </div>
      
     }
   }