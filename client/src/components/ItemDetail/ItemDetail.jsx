import { useContext } from "react";
import { useParams } from "react-router-dom";
import { VideoContext } from "../VideoContext";
import Items from "../video_items/Items";

const ItemDetail = () => {
  // Get teh item id from url
  const { itemId } = useParams();
  const { items } = useContext(VideoContext);

  const selectedItem = items.filter(
    (item) => item.snippet.channelId === itemId
  );
  console.log(selectedItem[0].snippet);

  return (
    <>
      <div>{itemId}</div>
    </>
  );
};

export default ItemDetail;
