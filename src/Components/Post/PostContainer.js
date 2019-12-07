import React, {useState, useEffect} from "react";
import PropTypes from "prop-types";
import useInput from "../../Hooks/useInput";
import PostPresenter from "./PostPresenter";

const PostContainer = ({
    id, 
    user, 
    files,
    likeCount,
    isLiked,
    comments,
    createdAt,
    caption,
    location
}) => {
    const [isLikedS, setIsLiked] = useState(isLiked);
    const [likeCountS, setLikeCount] = useState(likeCount);
    const [currnetItem, setCurrentItem] = useState(0);
    const comment = useInput("");
    const slide = () => {
        const totalFiles = files.length;
        if(currnetItem === totalFiles -1) {
            setTimeout(() => setCurrentItem(0), 2000);
        } else {
            setTimeout(() => setCurrentItem(currnetItem + 1), 2000);
        }
    };
    useEffect(() => {
        slide();
    }, [currnetItem]);
    return <PostPresenter
        user={user} 
        files={files}
        likeCount={likeCountS}
        location={location}
        caption={caption}
        isLiked={isLikedS}
        comments={comments}
        createdAt={createdAt}
        newCommnet={comment}
        setIsLiked={setIsLiked}
        setLikeCount={setLikeCount}
        currnetItem={currnetItem}
    />;
}

PostContainer.prototype = {
    id: PropTypes.string.isRequired,
    user: PropTypes.shape({
        id: PropTypes.string.isRequired,
        avatar: PropTypes.string,
        username: PropTypes.string.isRequired
    }),
    files: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired
    })).isRequired,
    likeCount: PropTypes.number.isRequired,
    isLiked: PropTypes.bool.isRequired,
    comments: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired
    })).isRequired,
    caption: PropTypes.string.isRequired,
    location: PropTypes.string,
    createdAt: PropTypes.string.isRequired
}

export default PostContainer;