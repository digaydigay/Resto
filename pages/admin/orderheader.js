import React from "react";
import { useRouter } from "next/router";
import { useAuthContext } from "../../context/AuthProvider";
const OrderHeader = () => {
  const Router = useRouter();
  const { currentUser } = useAuthContext();
  const Path = Router.asPath;
  return (
    <div className="admin-header">
      <ul>
        <li
          onClick={() =>
            Router.replace(`/admin/pending/${currentUser && currentUser.uid}`)
          }
          className={`${
            Path === `/admin/pending/${currentUser && currentUser.uid}` &&
            "active"
          }`}
        >
          Pendings
        </li>
        <li
          onClick={() =>
            Router.replace(`/admin/reject/${currentUser && currentUser.uid}`)
          }
          className={`${
            Path == `/admin/reject/${currentUser && currentUser.uid}` &&
            "active"
          }`}
        >
          Rejecteds
        </li>
        <li
          onClick={() =>
            Router.replace(`/admin/approve/${currentUser && currentUser.uid}`)
          }
          className={`${
            Path == `/admin/approve/${currentUser && currentUser.uid}` &&
            "active"
          }`}
        >
          Deliverys
        </li>

        <li
          onClick={() =>
            Router.replace(`/admin/complete/${currentUser && currentUser.uid}`)
          }
          className={`${
            Path == `/admin/complete/${currentUser && currentUser.uid}` &&
            "active"
          }`}
        >
          Completed
        </li>
      </ul>
    </div>
  );
};

export default OrderHeader;
