import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { Link } from 'react-router-dom';
import axios from 'axios';

const DeletePoste = (props) => {
    const { id } = useParams();
    const [post, setPost] = useState();

    useEffect(() => {
        axios.get(`http://localhost:8067/LIVRE/livre/${id}`).then(result => {
            setPost(result.data);
        })
    }, [id]);

    const handleRemovePost = () => {
        axios.post(`http://localhost:8067/LIVRE/livre/delete`,post).then(result => {
            props.history.push("/");
        })
    };

    return (
        <div>
		
		<div>
		{post.numISBN}
		</div>
        <div>
		{post.titre}
</div>
        <div>
		{post.auteur}
</div>
		
            <div className="btn-group">
                <button onClick={handleRemovePost} className="btn btn-danger">
supprimer
                </button>
				
				
            </div>
        </div>
    );
}

export default DeletePoste;