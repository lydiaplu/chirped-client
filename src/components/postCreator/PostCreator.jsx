import React, { useState, useEffect } from 'react';
import { FiImage, FiTrash2 } from 'react-icons/fi';
import { useSelector, useDispatch } from 'react-redux';
import { addTweetsSlice,updateTweetSlice } from '../../store/tweetsSlice';

import { addTweet,editTweet } from '../../api/tweetApi';
import {
  PostContainer, InputSection, ButtonRow, IconContainer, PostButton,
  HiddenFileInput, ImagesPreviewContainer, ImageContainer, DeleteButton, Input
} from './PostCreator.styles';

export default function PostCreator({ tweet, setModalIsOpen }) {
  const dispatch = useDispatch();
  const currentUser = useSelector(state => state.user.currentUser);
  
  const [input, setInput] = useState('');
  const [files, setFiles] = useState([]);

  useEffect(() => {
    if (tweet) {
      setInput(tweet.content);
      setFiles(tweet.images);
    }
  }, [tweet]);

  const handleFiles = (event) => {
    setFiles(Array.from(event.target.files).map(file => ({
      url: URL.createObjectURL(file),
      file
    })));
  };

  const deleteImage = (image) => {
    setFiles(files.filter(file => file.url !== image.url));
    URL.revokeObjectURL(image.url);
  };

  const clearForm = () => {
    setInput("");
    setFiles([]);
  }

  const createTweetFun = async () => {
    try {
      // Compress images before uploading
      // try {
      //     const compressedImage = await resizeImage(carBrand.logo, 800, 600, 0.7);
      //     carBrand.logo = compressedImage;
      // } catch (error) {
      //     console.error('Error compressing the image', error);
      // }

      const tweet = {
        userId: currentUser.userId,
        content: input,
        images: null
      }

      const result = await addTweet(tweet);

      if (result) {
        // showMessage("added successfully!", "info");
        clearForm();
        dispatch(addTweetsSlice([result]));
      } else {
        // showMessage("Error adding!", "danger");
      }
    } catch (error) {
      // showMessage(error.message, "danger");
    }
  }

  const editTweetFun = async () => {
    try {
      // Compress images before uploading
      // try {
      //     const compressedImage = await resizeImage(carBrand.logo, 800, 600, 0.7);
      //     carBrand.logo = compressedImage;
      // } catch (error) {
      //     console.error('Error compressing the image', error);
      // }

      const tweetObj = {
        tweetId: tweet.tweetId,
        content: input,
        images: null
      }

      const success = await editTweet(tweetObj);

      if (success) {
        // showMessage("added successfully!", "info");
        clearForm();
        dispatch(updateTweetSlice(tweetObj))
        setModalIsOpen(false);
      } else {
        // showMessage("Error adding!", "danger");
      }
    } catch (error) {
      // showMessage(error.message, "danger");
    }
  }

  const postTweet = () => {
    if (tweet) {
      editTweetFun();
    } else {
      createTweetFun();
    }
  };

  return (
    <PostContainer>
      <InputSection>
        <Input as="textarea" placeholder="What is happening?!" value={input} onChange={(e) => setInput(e.target.value)} />
      </InputSection>
      {files && files.length > 0 && (
        <ImagesPreviewContainer>
          {files.map((image, index) => (
            <ImageContainer key={index}>
              <img src={image.url} alt="Preview" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              <DeleteButton onClick={() => deleteImage(image)}>
                <FiTrash2 />
              </DeleteButton>
            </ImageContainer>
          ))}
        </ImagesPreviewContainer>

      )}

      <ButtonRow>
        <IconContainer htmlFor="file-upload">
          <FiImage />
          <HiddenFileInput id="file-upload" type="file" multiple onChange={handleFiles} />
        </IconContainer>
        <PostButton onClick={postTweet}>Post</PostButton>
      </ButtonRow>
    </PostContainer>
  );
}
