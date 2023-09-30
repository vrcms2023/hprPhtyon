import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Title from "../../../Common/Title";
import Button from "../../../Common/Button";
import { useNavigate } from "react-router-dom";
import { axiosServiceApi } from "../../../util/axiosUtil";
import { toast } from "react-toastify";
import { getCookie } from "../../../util/cookieUtil";
import { confirmAlert } from "react-confirm-alert";
import DeleteDialog from "../../../Common/DeleteDialog";

const UserAdmin = () => {
  const [userDetails, setUserDetails] = useState([]);
  const [isSuperAdmin, setisSuperAdmin] = useState("");
  const [userName, setUserName] = useState("");
  const [userId, setUserId] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    setUserName(getCookie("userName"));
    setisSuperAdmin(JSON.parse(getCookie("is_admin")));
    setUserId(JSON.parse(getCookie("userId")));
  }, []);

  const navigate = useNavigate();

  /**
   * get User details
   */
  const getAllUserDetails = async () => {
    try {
      const response = await axiosServiceApi.get(`api/v1/user/auth/users/`);
      if (response?.status == 200 && response.data?.length > 0) {
        setUserDetails(response.data);
      } else {
        setUserDetails([]);
      }
    } catch (error) {
      toast.error("Unable to load user details");
    }
  };
  useEffect(() => {
    getAllUserDetails();
  }, []);

  const handleUserDelete = (user) => {
    console.log(user);
    const deleteUser = async () => {
      // const response = await axiosServiceApi.delete(
      //   `api/v1/user/auth/users/me/`,
      // );
      //console.log(response)
    };

    confirmAlert({
      customUI: ({ onClose }) => {
        return (
          <DeleteDialog
            onClose={onClose}
            callback={deleteUser}
            message={`you want to delete the ${user.userName}`}
          />
        );
      },
    });
  };

  /**
   * user activation
   * @param {*} user
   */
  const activeDeactiveUser = async (user) => {
    try {
      const response = await axiosServiceApi.put(
        `api/v1/user/auth/appAccess/${user.id}/`,
        {
          is_appAccess: !user.is_appAccess,
        },
      );

      if (response.status !== 200) {
        toast.error("Unable to active user");
      }

      if (response.status == 200) {
        toast.success(`${user.userName} is status updated`);
        getAllUserDetails();
      }
    } catch (error) {
      toast.error("Unable to active user");
    }
  };

  return (
    <div className="container-fluid pt-5" style={{ marginTop: "120px" }}>
      <div className="row px-3 px-lg-5">
        <div className="text-end d-flex justify-content-between">
          <Title
            title={"Application Pages"}
            cssClass="text-center blue-500 fs-4"
          />
          <Button
            type="submit"
            cssClass="btn btn-secondary"
            label="Back to Menu"
            handlerChange={() => navigate("/main")}
          />
        </div>
      </div>

      <div className="row px-3 px-lg-5 py-4 table-responsive">
        {isSuperAdmin ? (
          <table className="table table-striped table-hover">
            <thead>
              <tr>
                <th>UserName</th>
                <th>Email</th>
                <th>Admin type</th>
                <th colSpan={2}>isActive</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {userDetails?.map((user) => (
                <tr key={user.id}>
                  <td>{user.userName}</td>
                  <td>{user.email}</td>
                  <td>{user.is_admin ? "Super Admin" : "User"}</td>
                  <td>{user.is_appAccess.toString()} </td>
                  <td>
                    {user.id !== userId && !user.is_admin ? (
                      <input
                        type="checkbox"
                        checked={user.is_appAccess}
                        readOnly
                        onClick={() => {
                          activeDeactiveUser(user);
                        }}
                      />
                    ) : (
                      ""
                    )}
                  </td>
                  <td>
                    {user.id !== userId && !user.is_admin ? (
                      <Link to="" onClick={() => handleUserDelete(user)}>
                        <i
                          className="fa fa-trash-o fs-4 text-danger"
                          aria-hidden="true"
                          title="Delete"
                        ></i>
                      </Link>
                    ) : (
                      ""
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <h3>Not authorized to view this page </h3>
        )}
      </div>
    </div>
  );
};

export default UserAdmin;