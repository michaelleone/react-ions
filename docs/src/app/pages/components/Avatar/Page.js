import React from 'react'
import PropsList from 'private/modules/PropsList';
import docs from '!!docgen!react-ions/lib/Avatar/Avatar';
import CodeExample from 'private/modules/CodeExample'
import styles from 'private/css/content'
import ExampleAvatar from './ExampleAvatar'
import exampleAvatarCode from '!raw!./ExampleAvatar'
import FallbackAvatar from './FallbackAvatar'
import fallbackAvatarCode from '!raw!./FallbackAvatar'

const description = {
  avatar: 'This is the `avatar component`.'
};

const AvatarPage = () => (
  <div>
    <div className={styles.content}>
      <div className={styles.block}>
        <CodeExample
          title='Example Avatar'
          description={description.avatar}
          markup={exampleAvatarCode}>
          <ExampleAvatar />
        </CodeExample>
        <CodeExample
          title='Avatar with fallback letters/color'
          description={description.avatar}
          markup={fallbackAvatarCode}>
          <FallbackAvatar />
        </CodeExample>
      </div>
      <div className={styles.block}>
        <h3>Props</h3>
        <PropsList list={docs[0].props} />
      </div>
    </div>
  </div>
)

export default AvatarPage
