import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';

const CreatePoste = (props) => {
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => {
        axios.post('http://localhost:8067/LIVRE/livre/add', data).then(result => {
            props.history.push("/");
        })
    };

    return (
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">nouveau livre</h5>
                <div className="card-text">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-group">
                            <label>titre</label>
                            <input type="text" class="form-text text-danger" name="titre"/>
                        </div>
                        <div className="form-group">
                            <label>auteur</label>
                            <input type="text" className="form-control" name="auteur"  />
                        </div>
                        <div className="form-group">
                            <label>dateEdition</label>
                            <input type="text" className="form-control" name="dateedition" />
                        </div>
                        <div className="form-group">
                            <label>categorie</label>
                            <input type="text" className="form-control" name="categorie"  />
                 
                        </div>
                        
                        <button type="submit" className="btn btn-primary">add </button>
                    </form>
                </div>
            </div>
            
        </div>
    );
}

export default CreatePoste;