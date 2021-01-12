class Footer extends React.Component{
    render(){
        return <footer>{this.props.year}Copyright</footer>;
    }
}
Footer.defaultProps = {
    year: 2019
}