


import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const LivreList = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
      axios.get('http://localhost:8067/LIVRE/livre/livres').then(result => {
          setPosts(result.data);
      })
  }, []);

    return (
        <div>
            
        <table className="table">
          
            <thead>
                <tr>
                    <th className="text-center">numISBN</th>
                    <th className="text-center">titre</th>
                    <th className="text-center">auteur</th>
                    <th className="text-center">date</th>
                    <th className="text-center">categorie</th>

                </tr>
            </thead>
            <tbody>
                {
                    posts.map(post => (
                        <tr key={post.numISBN}>
<td>						{post.numISBN}</td>
                            <td>{post.titre}</td>
                            <td className="text-center">{post.auteur}</td>
                            <td className="text-center">{post.date}</td>
                            <td className="text-center">{post.categorie}</td>
                            <td className="text-center">
                                <div className="btn-group">
                                   
                                   
                                    <Link to={`/deleteLI/${post.numISBN}`} className="btn btn-danger">
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

export default LivreList ;