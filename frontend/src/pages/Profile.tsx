import { useState } from "react";

const Profile = () => {
  const [formData, setFormData] = useState({
    name: "ahmed",
    email: "jjj.com",
    address: "cairo",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("done");
  };

  return (
    <div className="max-w-4xl mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold mb-6">My Profile</h1>

      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded shadow-md mb-10"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block mb-2 text-sm font-medium">Name</label>
            <input
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 border rounded outline-none"
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium">Email</label>
            <input
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 border rounded outline-none"
            />
          </div>
          <div className="md:col-span-2">
            <label className="block mb-2 text-sm font-medium">Address</label>
            <input
              name="address"
              value={formData.address}
              onChange={handleChange}
              className="w-full p-3 border rounded outline-none"
            />
          </div>
        </div>
        <button
          type="submit"
          className="mt-6 bg-green-500 text-white px-6 py-2 rounded hover:bg-green-600"
        >
          Save Changes
        </button>
      </form>

      <div>
        <h2 className="text-2xl font-semibold mb-4">My Orders</h2>
        <div className="bg-white shadow rounded p-4">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b">
                <th className="py-2">Order ID</th>
                <th className="py-2">Date</th>
                <th className="py-2">Total</th>
                <th className="py-2">Status</th>
              </tr>
            </thead>
            <tbody>
              {/*  {orders.map((order) => (
                <tr key={order.id} className="border-b">
                  <td className="py-2">#{order.id}</td>
                  <td className="py-2">{order.date}</td>
                  <td className="py-2">${order.total}</td>
                  <td className="py-2">{order.status}</td>
                </tr>
              ))} */}

              <tr>
                <td colSpan={4} className="text-center py-4 text-gray-500">
                  No orders found.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Profile;
