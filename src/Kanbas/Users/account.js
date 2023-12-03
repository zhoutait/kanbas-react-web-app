import * as client from "./client";
import { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
function Account() {
  const [user, setUser] = useState(null);
  const { id } = useParams();
  const [account, setAccount] = useState(null);
  const findUserById = async (id) => {
    const user = await client.findUserById(id);
    setAccount(user);
  };
  useEffect(() => {
    if (id) {
      findUserById(id);
    } else {
      fetchAccount();
    }
  }, []);
  const navigate = useNavigate();
  const fetchAccount = async () => {
    const account = await client.account();
    setAccount(account);
  };
  const save = async () => {
    await client.updateUser(account);
  };
  const signout = async () => {
    await client.signout();
    navigate("/kanbas/signin");
  };
  return (
    <div className="w-50">
      <h1>Account</h1>
      {account && (
        <div>
          <p>Username: {account.username}</p>
          <input
            type="password"
            className="form-control"
            value={account.password}
            onChange={(e) =>
              setAccount({ ...account, password: e.target.value })
            }
          />
          <input
            type="text"
            className="form-control"
            value={account.firstName}
            onChange={(e) =>
              setAccount({ ...account, firstName: e.target.value })
            }
          />
          <input
            type="text"
            className="form-control"
            value={account.lastName}
            onChange={(e) =>
              setAccount({ ...account, lastName: e.target.value })
            }
          />
          <input
            type="date"
            className="form-control"
            // defaultValue={account?.dob ? account?.dob.substring(0, 10) : ""}
            value={account.dob.split("T")[0]}
            onChange={(e) => setAccount({ ...account, dob: e.target.value })}
          />
          <input
            type="email"
            className="form-control"
            value={account.email}
            onChange={(e) => setAccount({ ...account, email: e.target.value })}
          />
          <select
            onChange={(e) => setAccount({ ...account, role: e.target.value })}
          >
            <option value="USER">User</option>
            <option value="ADMIN">Admin</option>
            <option value="FACULTY">Faculty</option>
            <option value="STUDENT">Student</option>
          </select>
          <button onClick={save}>Save</button>
          <button onClick={signout}>Signout</button>
          {account.role === "ADMIN" && (
            <Link to="/Kanbas/Users" className="btn btn-warning">
              Users
            </Link>
          )}
        </div>
      )}
    </div>
  );
}

export default Account;
