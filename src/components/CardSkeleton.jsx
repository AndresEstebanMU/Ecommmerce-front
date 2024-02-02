import Skeleton from "react-loading-skeleton";



const CardSkeleton = ({cards}) => {
  return Array(cards)
  .fill(0)
  .map((_, i) => (
      <div className="card-skeleton" key={i}>
          <div className="img-row">
              <Skeleton width={'244px'} height={'200px'} />
          </div>
          <div className="info-row">
              <Skeleton width={'244px'} height={'190px'}/>
          </div>
          
      </div>
  ));
};

export default CardSkeleton