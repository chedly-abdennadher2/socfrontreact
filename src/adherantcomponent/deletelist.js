import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { Link } from 'react-router-dom';
import axios from 'axios';

const DeletePost = (props) => {
    const { id } = useParams();
    const [post, setPost] = useState();

    useEffect(() => {
        axios.get(`http://localhost:8067/ADHERENT/adherent/${id}`).then(result => {
            setPost(result.data);
        })
    }, [id]);
alert (post);
    const handleRemovePost = () => {
        axios.post(`http://localhost:8067/ADHERENT/adherent/delete/`,post).then(result => {
            props.history.push("/");
        })
    }

    return (
        <div>
      <div>
	  {post.id_adherent}

</div>
<div>
{post.nom}

</div>
<div>
{post.prenom}

</div>
	  <div>
	  </div>
            <div className="btn-group">

                <button onClick={handleRemovePost} className="btn btn-danger">
      supprimer         
			   </button>
            </div>
			
        </div>
    );
}

export default DeletePost;