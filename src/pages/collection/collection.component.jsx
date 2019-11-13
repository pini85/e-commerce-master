import React from "react";
import { connect } from "react-redux";
import {
  selectCollection,
  selectSaleCollection,
  selectExclusiveCollection
} from "../../redux/shop/shop.selectors";
import Card from "../../components/card/card.component";
import "./collection.styles.scss";
class CollectionPage extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    const { collection } = this.props;
    console.log(collection);

    return (
      <div>
        <h2 className="heading-secondary">{collection.title}</h2>
        {collection.items.map(item => {
          return (
            <>
              <Card item={item} key={item.id} isAll></Card>;
            </>
          );
        })}
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state),
  sale: selectSaleCollection(state),
  exclusive: selectExclusiveCollection(state)
});
export default connect(mapStateToProps)(CollectionPage);
