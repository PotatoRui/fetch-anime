import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import styles from './NavigationItem.module.scss'

const NavigationItem = ({ season }) => {
  return (
    <li className={styles.NavigationItem}>
      <div className={styles.DropBtn}>
        {season} <FontAwesomeIcon icon="caret-down" />
      </div>
      <div
        className={styles.DropdownContent}
        style={season === 'fall' ? { left: -59 } : {}}
      >
        <Link to={`/list/2018/${season}`}>{season} 2018-2019</Link>
        <Link to={`/list/2017/${season}`}>{season} 2017-2018</Link>
        <Link to={`/list/2016/${season}`}>{season} 2016-2017</Link>
        <Link to={`/list/2015/${season}`}>{season} 2015-2016</Link>
        <Link to={`/list/2014/${season}`}>{season} 2014-2015</Link>
        <Link to={`/list/2013/${season}`}>{season} 2013-2014</Link>
      </div>
    </li>
  )
}

export default NavigationItem
