import Skeleton from "react-loading-skeleton";



const SkeletonNav = ({cards}) => {
  return Array(cards)
  .fill(0)
  .map((_, i) => (
      <div className="card-skeleton" key={i}>
          <div className="img-row">
              <Skeleton width={'70px'} height={'70px'} />
          </div>
          
          
      </div>
  ));
};

export default SkeletonNav