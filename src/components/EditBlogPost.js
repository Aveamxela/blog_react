// import { useEffect, useState } from "react";
// import FetchPostId from "../components/FetchPostId";
// import { useParams } from "react-router";

const EditBlogPost = ({onSubmit,onEditTitle, onEditBody, titleValue, bodyValue}) => {
    return (
        <>
            <h1>COMPOSANT EDIT</h1>
            {/* Créer composant form */}
            <form onSubmit={onSubmit}>
                <input
                    placeholder={titleValue}
                    // Revoir onChange
                    onChange={(e) => onEditTitle(e.target.value)}
                    name={titleValue}
                    type="text"
                />
                <textarea
                    placeholder={bodyValue}
                    // Revoir onChange
                    onChange={(e) => onEditBody(e.target.value)}
                    name={bodyValue}
                    type="text"
                />
                <button type="submit">Terminer l'édition</button>
            </form>
        </>
    );
};

export default EditBlogPost;
