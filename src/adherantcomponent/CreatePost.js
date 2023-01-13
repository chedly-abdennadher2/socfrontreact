import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';

const CreatePost = (props) => {
    const { register, handleSubmit, errors } = useForm();
    var adherent={nom:'',prenom:''};

	const onSubmit = data => {
	adherent.nom=document.getElementById("nom").value;
	adherent.prenom=document.getElementById("prenom").value;

		axios.post('http://localhost:8067/ADHERENT/adherent/add', adherent).then(result => {
            props.history.push("/");
        })
    };

    return (
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">nouveau adherant</h5>
                <div className="card-text">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-group">
                            <label>nom</label>
                            <input type="text" className="form-control" name="nom" id="nom" />
                        </div>
                        <div className="form-group">
                            <label>prenom</label>
                            <input type="text" className="form-control" name="prenom" id="prenom"/>
                        </div>
                        
                        <button type="submit" className="btn btn-primary">add </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default CreatePost;