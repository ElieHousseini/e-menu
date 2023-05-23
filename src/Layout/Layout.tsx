import styles from './Layout.module.css'
import { ReactNode } from 'react';

type childrenType = {
    children: ReactNode
}

const Layout = ({children}: childrenType) : JSX.Element => {
    return (
        <div className={styles.layout}>
            {children}
        </div>
    )
}

export default Layout;