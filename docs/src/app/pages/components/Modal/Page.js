import React from 'react'
import PropsList from 'private/modules/PropsList'
import docs from '!!docgen!react-conventions/lib/Modal/Modal'
import CodeExample from 'private/modules/CodeExample'
import styles from 'private/css/content'
import ExampleModalDefault from './ExampleModalDefault'
import exampleModalDefaultCode from '!raw!./ExampleModalDefault'
import ExampleModalActions from './ExampleModalActions'
import exampleModalActionsCode from '!raw!./ExampleModalActions'
import ExampleModalSmall from './ExampleModalSmall'
import exampleModalSmallCode from '!raw!./ExampleModalSmall'
import ExampleModalLarge from './ExampleModalLarge'
import exampleModalLargeCode from '!raw!./ExampleModalLarge'

const description = {
  modalDefault: 'This is the `modal component` as it appears by default.',
  modalActions: 'This is the `modal component` with actions.',
  modalSmall: 'This is the small `modal component`.',
  modalLarge: 'This is the large `modal component`.'
};

const RadioPage = () => (
  <div>
    <div className={styles.content}>
      <div className={styles.block}>
        <h3>Examples</h3>
        <CodeExample
          title='Default Modal'
          description={description.modalDefault}
          markup={exampleModalDefaultCode}>
          <ExampleModalDefault />
        </CodeExample>
        <CodeExample
          title='Modal With Actions'
          description={description.modalActions}
          markup={exampleModalActionsCode}>
          <ExampleModalActions />
        </CodeExample>
        <CodeExample
          title='Small Modal'
          description={description.modalSmall}
          markup={exampleModalSmallCode}>
          <ExampleModalSmall />
        </CodeExample>
        <CodeExample
          title='Large Modal'
          description={description.modalLarge}
          markup={exampleModalLargeCode}>
          <ExampleModalLarge />
        </CodeExample>
        <div className={styles.block}>
          <h3>Props</h3>
          <PropsList list={docs[0].props} />
        </div>
      </div>
    </div>
  </div>
)

export default RadioPage
