import BadgeType from "../../constant/ToDoConstant";

function ToDoBadge({ badgeType }) {

  switch (badgeType) {

    case BadgeType.low:
      return <span className="badge low">Low</span>;

    case BadgeType.medium:
      return <span className="badge medium">Medium</span>;

    case BadgeType.high:
      return <span className="badge high">High</span>;


    default:
      return <span className="badge">{badgeType || "Unknown"}</span>;
  }
}

export default ToDoBadge;