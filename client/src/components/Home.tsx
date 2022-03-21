import * as React from 'react';
import { useEffect, useState } from 'react';
import { StoryEntity } from '../interfaces/story';

const headers = new Headers();

headers.append('Content-Type', 'application/json');

export interface IHomeProps {}

export const Home = ({}: IHomeProps) => {
  const addStory = () => {
    fetch('http://localhost:3001/api/stories', {
      method: 'POST',
      mode: 'cors',
      cache: 'no-cache',
      credentials: 'same-origin',
      headers: headers,
      redirect: 'follow',
      referrerPolicy: 'no-referrer',
      body: JSON.stringify({
        title: 'My title',
        author: 'Ben',
      }),
    }).then((response) => {
      console.log('res', response);
    });
  };

  const [stories, setStories] = useState<StoryEntity[]>([]);

  useEffect(() => {
    fetch('http://localhost:3001/api/stories')
      .then((response) => {
        response.json().then((data) => {
          setStories(data);
        });
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  console.log('stories', stories);
  return (
    <div>
      <h1>Home</h1>
      <div>
        {stories.map((story) => (
          <div key={story.id}>
            <h3>{story.title}</h3>
            <p>{story.id}</p>
            <p>{story.dateCreated.toString()}</p>
          </div>
        ))}
      </div>
      <button onClick={addStory}>Add Story</button>
    </div>
  );
};
