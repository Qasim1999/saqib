import React,{Component} from "react";


class profile extends Component{

    

    render(){

        var arr = 
        [{name:'Joe Dowdell',   profession: 'Trainer', email : 'Joe Dowdell@gmail.com' ,    img:"./img/3.jpg"  , contact: {Residence: 'The-Gym, Lahore Pakistan', Cell :"035332897432"}},
        {name:'Matt McGorry',     profession: 'Trainer',  email : 'Matt McGorry@gmail.com',   img:"./img/4.jpg"  , contact: {Residence: 'The-Gym, Lahore Pakistan', Cell :"0324332897432"}},
        {name:'BJ Gaddour',   profession: 'Trainer', email : 'BJ Gaddour@gmail.com',  img:"./img/2.jpg"  ,contact: {Residence: 'The-Gym, Lahore Pakistan', Cell :"033332897432"}}];
            
        var response = arr.map((obj) =>{
            return (


                <div className="data">
                    <img src={obj.img} alt=""/>
                    <h1>{obj.name}</h1>
                    <div className="info">
                        <p>Profession:{obj.profession}</p>
                        <p>Email:{obj.email}</p>
                        <p>Cell:{obj.contact.Cell}</p>
                        
                    </div>
                </div>
            );
        });

        


        return (        
            <div className="profile">
                {response}
            </div>
        );
    }
}
export default profile;