import React,{Component} from "react"
import './New.css';
import api from '../services/api';

class New extends Component{
    state = {
        image:null,
        author:'',
        place:'',
        description:'',
        hashtags:'',
    };

    handleSubmit = async e =>{
        e.preventDefault();
        
        const data = new FormData();

        data.append('image',this.state.image);
        data.append('author',this.state.author);
        data.append('place',this.state.place);
        data.append('description',this.state.description);
        data.append('hashtags',this.state.hashtags);

     await api.post('posts', data)
this.props.history.push('/')

    }

    handleImageCharge = e=>{
        this.setState({image: e.target.files[0]});
    }

    handleCharge = e =>{
      this.setState({[e.target.name] :e.target.value}) ; 
    }

render(){
    return(
        <form id="new-post" onSubmit={this.handleSubmit}>
            <input type="file" onChange={this.handleImageCharge}/>
            <input
            type ="text"
            name = "author"
            placeholder="autor do post"
            onChange={this.handleCharge}
            value={this.state.author}
            />
            <input
            type ="text"
            name = "place"
            placeholder="local do do post"
            onChange={this.handleCharge}
            value={this.state.place}
            /> 
            <input
            type ="text"
            name = "description"
            placeholder="descrição do post"
            onChange={this.handleCharge}
            value={this.state.description}
            />
             <input
            type ="text"
            name = "hashtags"
            placeholder="hashtags do post"
            onChange={this.handleCharge}
            value={this.state.hashtags}
            />
            <button type="submit">enviar</button>


        </form>
    );
}
}
export default New;