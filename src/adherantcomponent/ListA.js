


import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import CreatePost from '../adherantcomponent/CreatePost';

const AdherantList = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
      axios.get('http://localhost:8067/ADHERENT/adherent/adherents').then(result => {
          setPosts(result.data);
      })
  }, []);
  


  
  

    return (
        <div>
    		       
	   <table className="table">
            <thead>
                <tr>
                    <th className="text-center">id</th>
                    <th className="text-center">nom</th>
                    <th className="text-center">prenom</th>
                   <th className="text-center">action</th>
    
   </tr>
            </thead>
            <tbody>
		    {
                    posts.map(post => (
                        <tr key={post.id}>
						<td> {post.id_adherent}</td>
                            <td>{post.nom}</td>
                            <td className="text-center">{post.prenom}</td>
                            <td className="text-center">
                                <div className="btn-group">
                                   
                                   
                                    <Link to={`/deleteAD/${post.id_adherent}`} className="btn btn-danger">
                                        <i className="fa fa-trash">delete</i>
                                    </Link>
                                </div>
                            </td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
       
	   </div>
    );
}

export default AdherantList;