import React from 'react'

import LinksList from './LinksList'
import PrivateHeader from './PrivateHeader'
import AddLink from './AddLink'
import LinksListFilters from './LinksListFilters'

class Link  extends React.Component {
  componentDidMount() {
    if (Meteor.userId()){
      this.props.history.replace('/links');
    } else {
      this.props.history.replace('/');
    }
  }
  render () {
    return (
      <div>
      <PrivateHeader title="Your Links" history={this.props.history}/>
      <div className="page-content">
        <LinksListFilters/>
        <AddLink/>
        <LinksList />
      </div>
    </div>
    )
  }
}

export default Link
