import * as React from 'react';
import {useRouter} from 'next/dist/client/router';

export interface PostIdProps {
}

export default function PostId (props: PostIdProps) {
  const router = useRouter()
  return (
    <div>
      <h2>Post Id pages</h2>
      <p>Query: {JSON.stringify(router.query)}</p>
    </div>
  );
}
